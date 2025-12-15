"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setError("");
        try {
            setLoading(true)
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();
            if (!data.success) {
                setError("❌ Wrong password");
                return;
            }

            router.push("/admin");
        } catch (error) {
            console.log(`Error Login: ${error}`)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Admin Login
                </h1>

                <input
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <button
                    onClick={login}
                    className={`w-full cursor-pointer bg-orange-600 text-white py-3 rounded font-bold ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                    {
                        loading ? "loading..." : "Login"
                    }
                </button>

                {error && (
                    <p className="text-red-600 mt-4 text-center">{error}</p>
                )}
            </div>
        </div>
    );
}
