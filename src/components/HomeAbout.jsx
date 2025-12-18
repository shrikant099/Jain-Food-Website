"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <section className="py-20 bg-gray-50 px-4 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/about/mobilePhoto.png"
            alt="Agarwal Rabdiwala Train Food Delivery at Abu Road"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* H2 – Correct hierarchy */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            About <span className="text-orange-600">Agarwal Rabdiwala</span>
          </h2>

          {/* SEO TEXT */}
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Agarwal Rabdiwala</strong> is a trusted IRCTC food partner
            providing fresh, hygienic and pure vegetarian Jain meals at{" "}
            <strong>Abu Road Railway Station</strong>. Since 2017, we have been
            delivering quality <a href="/services/train-delivery" className="text-orange-600 font-medium underline">
              train food
            </a>{" "}
            directly to passengers’ seats.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Famous for our <strong>authentic Rabdi</strong>, premium veg thalis
            and timely delivery, we have proudly served over{" "}
            <strong>20,000+ train passengers</strong>. We also specialize in{" "}
            <a href="/bulk-order" className="text-orange-600 font-medium underline">
              bulk food orders for trains
            </a>{" "}
            including group travel and events.
          </p>

          {/* CTA */}
          <motion.a
            href="/about-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-4 px-8 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-700 transition"
          >
            Read More About Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
