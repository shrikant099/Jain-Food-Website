"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "Food",
    description: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH BLOG ================= */
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      const res = await fetch(`/api/blogs/${id}`);
      const data = await res.json();

      setForm({
        title: data?.title || "",
        content: data?.content || "",
        category: data?.category || "Food",
        description: data?.description || "",
        metaTitle: data?.metaTitle || "",
        metaDescription: data?.metaDescription || "",
        metaKeywords: (data?.metaKeywords || []).join(", "),
      });

      setPreview(data?.image || "");
    };

    fetchBlog();
  }, [id]);

  /* ================= HANDLERS ================= */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === "metaKeywords") {
        formData.append(
          key,
          value
            .split(",")
            .map((k) => k.trim())
            .filter(Boolean)
        );
      } else {
        formData.append(key, value);
      }
    });

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
      if (!res.ok) throw new Error(data.error || "Update failed");

      alert("✅ Blog updated successfully");
      router.push("/admin");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl"
    >
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white p-6 rounded-2xl shadow space-y-6"
      >
        {/* TITLE */}
        <Input
          label="Blog Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        {/* CATEGORY */}
        <div>
          <label className="font-semibold mb-1 block">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          >
            <option value="Food">Food</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <Textarea
          label="Short Description (max 200)"
          name="description"
          value={form.description}
          onChange={handleChange}
          maxLength={200}
        />

        {/* CONTENT */}
        <Textarea
          label="Content"
          name="content"
          rows={6}
          value={form.content}
          onChange={handleChange}
        />

        {/* IMAGE */}
        {preview && (
          <img
            src={preview}
            className="rounded-xl max-h-64 object-cover"
          />
        )}

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {/* SEO */}
        <h3 className="font-bold pt-4">SEO Settings</h3>

        <Input
          label="Meta Title"
          name="metaTitle"
          value={form.metaTitle}
          onChange={handleChange}
        />

        <Textarea
          label="Meta Description (max 160)"
          name="metaDescription"
          value={form.metaDescription}
          onChange={handleChange}
          maxLength={160}
        />

        <Input
          label="Meta Keywords (comma separated)"
          name="metaKeywords"
          value={form.metaKeywords}
          onChange={handleChange}
        />

        {/* SUBMIT */}
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

/* ================= SMALL COMPONENTS ================= */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="font-semibold mb-1 block">{label}</label>
      <input {...props} className="w-full border px-4 py-3 rounded-lg" />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="font-semibold mb-1 block">{label}</label>
      <textarea
        {...props}
        className="w-full border px-4 py-3 rounded-lg resize-none"
      />
    </div>
  );
}
