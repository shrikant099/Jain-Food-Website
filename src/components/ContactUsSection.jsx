"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* H2 – SEO OPTIMIZED */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Contact <span className="text-orange-600">Agarwal Rabdiwala</span> – Train Food at Abu Road
          </h2>

          {/* SEO TEXT */}
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Get in touch with Agarwal Rabdiwala for{" "}
            <a
              href="/bulk-order"
              className="text-orange-600 font-medium underline"
            >
              bulk train food orders
            </a>
            , daily meal delivery, or general enquiries at{" "}
            <strong>Abu Road Railway Station</strong>.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT: GOOGLE MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-[350px] md:h-full rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps?q=Agarwal%20Rabdiwala%20Abu%20Road&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              title="Agarwal Rabdiwala Abu Road Railway Station"
            ></iframe>
          </motion.div>

          {/* RIGHT: CONTACT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-center"
          >
            {/* BUSINESS NAME */}
            <h3 className="text-2xl font-bold text-gray-800">
              Agarwal <span className="text-orange-600">Rabdiwala</span>
            </h3>

            {/* SEO DESCRIPTION */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              Agarwal Rabdiwala is a trusted IRCTC food partner providing
              fresh, hygienic and pure vegetarian Jain meals at{" "}
              <strong>Abu Road Railway Station</strong>. We have been serving
              train passengers reliably since 2017.
            </p>

            {/* NAP DETAILS */}
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                📍 <b>Address:</b> Railway Parking Area, Abu Road Railway Station,
                Rajasthan, India
              </p>
              <p>
                📞 <b>Phone:</b>{" "}
                <a href="tel:+918107139044" className="text-orange-600 font-semibold">
                  +91 81071 39044
                </a>
                ,{" "}
                <a href="tel:+918290951295" className="text-orange-600 font-semibold">
                  +91 82909 51295
                </a>
              </p>
              <p>
                ✉️ <b>Email:</b>{" "}
                <a
                  href="mailto:sanjaysinghal265@gmail.com"
                  className="text-orange-600 font-semibold"
                >
                  sanjaysinghal265@gmail.com
                </a>
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+918290951295"
                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md transition"
              >
                Call Now
              </a>

              <Link
                href="https://share.google/fDBGHZ6ybghAmcNKf"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold shadow-md transition"
              >
                View on Google
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
