"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/content";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/20">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900">
        What Our{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Customers Say
        </span>
      </h2>

      <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
        Real reviews from happy passengers who enjoyed meals during their journey.
      </p>

      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-14 px-4">

        {/* FIXED HEIGHT WRAPPER */}
        <div className="relative h-[260px] md:h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full 
                         bg-white border border-orange-200/70 
                         p-8 rounded-2xl shadow-lg md:shadow-xl 
                         backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-orange-500"
                    fill="#f97316"
                    size={20}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed text-center">
                “{reviews[index].review}”
              </p>

              {/* Name & Order */}
              <div className="mt-5 text-center">
                <p className="font-bold text-gray-900 text-lg">
                  {reviews[index].name}
                </p>

                <p className="text-sm text-gray-500">
                  Abu Road Railway Station
                </p>

                <p className="text-sm text-orange-600 font-semibold mt-1">
                  {reviews[index].order}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
