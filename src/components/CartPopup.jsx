"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { selectCartCount, selectCartTotal } from "@/features/cart/selector";
import Link from "next/link";

export default function CartPopup() {
    const count = useSelector(selectCartCount);
    const total = useSelector(selectCartTotal);

    // Popup should show ONLY when items > 0
    if (count === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="
          fixed bottom-4 left-1/2 -translate-x-1/2
          w-[90%] max-w-md
          bg-orange-600 text-white
          px-6 py-4 rounded-2xl shadow-xl
          flex items-center justify-between
          z-[999]
        "
            >
                <div>
                    <p className="font-bold text-lg">{count} item(s) added</p>
                    <p className="text-sm opacity-90">Total: ₹{total}</p>
                </div>

                <Link
                    href="/checkout"
                    className="bg-white text-orange-600 px-4 py-2 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
                >
                    Checkout →
                </Link>
            </motion.div>
        </AnimatePresence>
    );
}
