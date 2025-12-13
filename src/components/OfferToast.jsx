"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Tag } from "lucide-react";
import { useEffect, useState } from "react";

export default function OfferToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => setShow(true), 800);

    const autoClose = setTimeout(() => {
      setShow(false);
    }, 5800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(autoClose);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="fixed top-24 right-4 z-[999] 
                     w-[92%] sm:w-[360px]"
        >
          <div className="bg-white rounded-2xl shadow-2xl 
                          border border-gray-200 p-4 relative">

            {/* CLOSE */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              <X size={18} />
            </button>

            {/* CONTENT */}
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 
                              flex items-center justify-center">
                <Tag className="text-orange-600" />
              </div>

              <div>
                <p className="font-bold text-gray-900 text-sm">
                  Get <span className="text-orange-600">10% OFF</span> 🎉
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  On orders upto ₹500 <br />
                  Fresh Jain food delivered!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
