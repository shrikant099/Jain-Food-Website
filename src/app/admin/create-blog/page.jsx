"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Loader2 } from "lucide-react";
import BlogEditor from "../components/BlogEditorContent";

export default function CreateBlogPage() {
    const [form, setForm] = useState({
        title: "",
        category: "Food",
        description: "",
        content: "",
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.title || !form.content || !form.category || !form.description || !image) {
            alert("Please fill all required fields");
            return;
        }



        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) =>
            formData.append(key, value)
        );
        formData.append("image", image);

        try {
            setLoading(true);

            const res = await fetch("/api/blogs", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setForm({
                title: "",
                category: "Food",
                description: "",
                content: "",
                metaTitle: "",
                metaDescription: "",
                metaKeywords: "",
            });
            setImage(null);
            setPreview(null);

            alert("Blog created successfully ✅");
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
        >
            <h1 className="text-2xl font-bold mb-6">Create Blog</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow p-6 space-y-6"
            >
                {/* TITLE */}
                <Input label="Blog Title *" name="title" value={form.title} onChange={handleChange} />

                {/* CATEGORY */}
                <div>
                    <label className="font-medium mb-2 block">Category *</label>
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                    >
                        <option value="Food">Food</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                    </select>
                </div>

                {/* DESCRIPTION */}
                <Textarea
                    label="Short Description * (max 200 characters)"
                    name="description"
                    value={form.description}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            description: e.target.value.slice(0, 200),
                        })
                    }
                />

                <p className="text-sm text-gray-500 text-right">
                    {form.description.length}/200
                </p>

                {/* CONTENT EDITOR ✅ FIXED */}
                <div>
                    <label className="font-medium mb-2 block">
                        Content *
                    </label>

                    <textarea
                        name="content"
                        value={form.content}
                        onChange={(e) =>
                            setForm({ ...form, content: e.target.value })
                        }
                        rows={8}
                        placeholder="Write blog content here..."
                        className="w-full border rounded-lg px-4 py-3
               focus:outline-none focus:ring-2
               focus:ring-orange-500 resize-none"
                        required
                    />
                </div>


                {/* IMAGE */}
                <div>
                    <label className="font-medium mb-2 block">Blog Image *</label>
                    <label className="flex items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 cursor-pointer hover:border-orange-500 transition">
                        <Upload />
                        <span className="text-gray-600">Click to upload image</span>
                        <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                    </label>

                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="mt-4 rounded-xl max-h-64 object-cover"
                        />
                    )}
                </div>

                {/* SEO */}
                <h3 className="font-bold pt-4">SEO Settings (Optional)</h3>

                <Input
                    label="Meta Title (max 70 characters)"
                    name="metaTitle"
                    value={form.metaTitle}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            metaTitle: e.target.value.slice(0, 70),
                        })
                    }
                />

                <p className="text-sm text-gray-500 text-right">
                    {form.metaTitle.length}/70
                </p>
                <Textarea
                    label="Meta Description (max 160 characters)"
                    name="metaDescription"
                    value={form.metaDescription}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            metaDescription: e.target.value.slice(0, 160),
                        })
                    }
                />

                <p className="text-sm text-gray-500 text-right">
                    {form.metaDescription.length}/160
                </p>
                <Input label="Meta Keywords (comma separated)" name="metaKeywords" value={form.metaKeywords} onChange={handleChange} />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold flex justify-center gap-2"
                >
                    {loading ? <><Loader2 className="animate-spin" /> Publishing...</> : "Publish Blog"}
                </button>
            </form>
        </motion.div>
    );
}

/* ===== SMALL COMPONENTS ===== */

function Input({ label, ...props }) {
    return (
        <div>
            <label className="font-medium mb-2 block">{label}</label>
            <input {...props} className="w-full border rounded-lg px-4 py-3" />
        </div>
    );
}

function Textarea({ label, ...props }) {
    return (
        <div>
            <label className="font-medium mb-2 block">{label}</label>
            <textarea {...props} rows={3} className="w-full border rounded-lg px-4 py-3 resize-none" />
        </div>
    );
}
