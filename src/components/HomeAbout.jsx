"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <section className="py-20 bg-gray-50 px-4 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80"
            alt="Agarwal Rabdiwala"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            About <span className="text-orange-600">Agarwal Rabdiwala</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Serving fresh, hygienic and pure vegetarian Jain meals since 2017
            at Abu Road Railway Station. We prepare every meal with love,
            tradition and cleanliness — delivering hot food directly to your
            train seat.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Known for our <b>authentic Rabdi</b> and <b>premium veg thalis</b>,
            we have served <b>20,000+ passengers</b> and partnered proudly with 
            <b> IRCTC</b>. Our focus is simple — taste, purity and customer delight.
          </p>

          {/* BUTTON */}
          <motion.a
            href="/about-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-4 px-8 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-700 transition"
          >
            Read More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
