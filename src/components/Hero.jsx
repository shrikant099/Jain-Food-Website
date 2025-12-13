"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
  ];

  const [index, setIndex] = useState(0);

  // Change background image every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100svh-80px)] overflow-hidden">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Fresh Jain Food"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-[0.55]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100svh-80px)] flex-col 
                      items-center justify-center text-center px-5">

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Fresh & Pure Jain Food
          <span className="block text-orange-400 mt-2">
            Delivered Right In Your Train
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-white/90 max-w-2xl mt-6 text-lg md:text-xl drop-shadow-xl"
        >
          Hygienic, delicious and sattvic Jain meals delivered hot & fresh at any railway station.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("enquiry-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-4 rounded-xl bg-orange-600 
                       hover:bg-orange-700 text-white 
                       font-semibold shadow-lg transition"
          >
            Enquiry Now
          </button>

          <Link
            href="/services/train-delivery"
            className="px-6 py-4 rounded-xl bg-white 
                       hover:bg-gray-200 text-black 
                       font-semibold shadow-lg transition"
          >
            Order Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
