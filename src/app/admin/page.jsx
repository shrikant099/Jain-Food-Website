"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const data = await res.json();
        setBlogs(data.blogs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setDeleting(true);

      const res = await fetch(`/api/blogs/${deleteId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      // UI se blog hatao
      setBlogs((prev) => prev.filter((b) => b._id !== deleteId));
      setDeleteId(null);
    } catch (err) {
      alert("Failed to delete blog");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading blogs...
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Blogs</h1>

        {blogs.map((blog, index) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Edit / Delete */}
            <div className="absolute top-4 right-4 flex gap-3 z-10">
              <button
                className="p-2 bg-white rounded-full shadow hover:bg-orange-50 text-orange-600"
                onClick={() =>
                  router.push(`/admin/edit-blog/${blog._id}`)
                }
              >
                <Pencil size={16} />
              </button>

              <button
                className="p-2 bg-white rounded-full shadow hover:bg-red-50 text-red-600"
                onClick={() => setDeleteId(blog._id)} // 👈 open modal
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-[40%] h-56 md:h-72 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:w-[60%] flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-3">
                  {blog.title}
                </h2>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 DELETE CONFIRM MODAL */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-full max-w-sm"
            >
              <h2 className="text-lg font-semibold mb-3">
                Delete Blog?
              </h2>

              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this blog?
                This action cannot be undone.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>

                <button
                  disabled={deleting}
                  onClick={handleDelete}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white disabled:opacity-70"
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
