"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`/api/blogs?page=${page}&limit=4`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
                setTotalPages(data.totalPages);
            });
    }, [page]);

    return (
        <section className="max-w-7xl mx-auto px-4 py-24">

            {/* HEADER */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    Our <span className="text-orange-600">Blogs</span>
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Jain food delivery, health & travel insights.
                </p>
            </div>

            {/* BLOG LIST */}
            <div className="space-y-24">
                {blogs.map(blog => (
                    <motion.div
                        key={blog._id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        {/* IMAGE */}
                        <div className="relative h-[320px] rounded-3xl overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div>
                            <p className="text-sm text-orange-600 font-semibold mb-2">
                                {blog.category}
                            </p>

                            <h2 className="text-3xl font-bold">
                                {blog.title}
                            </h2>

                            <p className="mt-4 text-gray-700">
                                {blog.description}
                            </p>

                            <Link
                                href={`/blogs/${blog.slug}`}
                                className="inline-block mt-6 text-orange-600 font-semibold"
                            >
                                View More →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-4 mt-20">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                    className="px-4 py-2 border rounded disabled:opacity-40"
                >
                    Prev
                </button>

                <span className="px-4 py-2 font-semibold">
                    {page} / {totalPages}
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(p => p + 1)}
                    className="px-4 py-2 border rounded disabled:opacity-40"
                >
                    Next
                </button>
            </div>
        </section>
    );
}
