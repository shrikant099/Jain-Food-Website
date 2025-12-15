"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Loader2 } from "lucide-react";

export default function CreateBlogPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !content || !image) {
            alert("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", image);

        try {
            setLoading(true);

            const res = await fetch("/api/blogs", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            // reset form
            setTitle("");
            setContent("");
            setImage(null);
            setPreview(null);

            alert("Blog created successfully ✅");
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
        >
            <h1 className="text-2xl font-bold mb-6">Create Blog</h1>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="bg-white rounded-2xl shadow p-6 space-y-6"
            >
                {/* Title */}
                <div>
                    <label className="block font-medium mb-2">Blog Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter blog title"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block font-medium mb-2">Blog Content</label>
                    <textarea
                        rows={6}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your blog content..."
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block font-medium mb-2">Blog Image</label>

                    <label className="flex items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 cursor-pointer hover:border-orange-500 transition">
                        <Upload />
                        <span className="text-gray-600">
                            Click to upload image
                        </span>
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleImageChange}
                        />
                    </label>

                    {/* Image Preview */}
                    {preview && (
                        <motion.img
                            src={preview}
                            alt="Preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-4 rounded-xl max-h-64 object-cover"
                        />
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-orange-700 transition disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Publishing...
                        </>
                    ) : (
                        "Publish Blog"
                    )}
                </button>
            </form>
        </motion.div>
    );
}
