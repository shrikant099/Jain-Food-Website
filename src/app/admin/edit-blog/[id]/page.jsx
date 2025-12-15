"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function EditBlogPage() {
    const { id } = useParams();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);

    // 🔥 Fetch blog data
    useEffect(() => {
        if (!id) return;
    
        const fetchBlog = async () => {
            const res = await fetch(`/api/blogs/${id}`);
            const data = await res.json();
    
            setTitle(data?.title || "");
            setContent(data?.content || "");
            setPreview(data?.image || "");
        };
    
        fetchBlog();
    }, [id]);
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);

        if (image) {
            formData.append("image", image);
        }

        try {
            setLoading(true);

            const res = await fetch(`/api/blogs/${id}`, {
                method: "PUT",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            alert("Blog updated successfully ✅");
            router.push("/admin");
        } catch (err) {
            alert("Update failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
        >
            <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="bg-white p-6 rounded-2xl shadow space-y-6"
            >
                {/* Title */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg"
                    placeholder="Blog title"
                />

                {/* Content */}
                <textarea
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg"
                    placeholder="Blog content"
                />

                {/* Image */}
                {preview && (
                    <img
                        src={preview}
                        className="rounded-xl max-h-64 object-cover"
                    />
                )}

                <input type="file" accept="image/*" onChange={handleImageChange} />

                {/* Submit */}
                <button
                    disabled={loading}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold"
                >
                    {loading ? (
                        <span className="flex justify-center gap-2">
                            <Loader2 className="animate-spin" /> Updating...
                        </span>
                    ) : (
                        "Update Blog"
                    )}
                </button>
            </form>
        </motion.div>
    );
}
