"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full mt-10">
      <div className="relative w-full overflow-hidden">

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55 z-10"></div>

  

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <Image
            src="/home/mbi.png"
            alt="Order Train Food & Meals at Abu Road Railway Station"
            width={1920}
            height={950}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* CTA BUTTONS */}
        <div className="hidden sm:hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 gap-6 z-30">
          <a
            href="tel:+918290951295"
            className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-xl transition"
          >
            Call Now
          </a>

          <Link
            href="/services/train-delivery"
            className="px-8 py-4 rounded-xl bg-white hover:bg-gray-100 text-black font-semibold shadow-xl transition"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}
