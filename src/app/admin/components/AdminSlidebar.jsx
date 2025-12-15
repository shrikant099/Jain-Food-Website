"use client";

import Link from "next/link";
import { X, FileText, PlusCircle, LogOut } from "lucide-react";

export default function AdminSidebar({ open, setOpen }) {
  return (
    <aside
      className={`
        z-40 h-screen w-64 bg-white shadow-lg
        fixed md:static top-0 left-0
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Header */}
      <div className="h-14 flex items-center justify-between px-6 border-b">
        <h1 className="text-xl font-bold text-orange-600">
          Admin Panel
        </h1>
        <button className="md:hidden" onClick={() => setOpen(false)}>
          <X />
        </button>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        <Link
          href="/admin/create-blog"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50"
        >
          <PlusCircle size={18} />
          Create Blog
        </Link>
        <Link
          href="/admin/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50"
        >
         
          Blogs
        </Link>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 w-full px-4">
        <button className="flex items-center gap-3 text-red-600">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
