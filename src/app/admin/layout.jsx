"use client";

import { useState } from "react";

import { Menu } from "lucide-react";
import AdminSidebar from "./components/AdminSlidebar";

export default function AdminLayout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className="flex">
                {/* Sidebar */}
                <AdminSidebar open={open} setOpen={setOpen} />

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Mobile top bar */}
                    <header className="h-14 bg-white shadow flex items-center px-4 md:hidden">
                        <button onClick={() => setOpen(true)}>
                            <Menu />
                        </button>
                        <h1 className="ml-4 font-semibold">Admin Panel</h1>
                    </header>

                    <main className="p-6">{children}</main>
                </div>
            </div>
        </div>
    );
}
