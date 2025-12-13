"use client";

import { motion } from "framer-motion";

export default function EnquirySection() {
  return (
    <section
      id="enquiry-section"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Bulk Order Enquiry
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Planning food for groups or train passengers? We’re here to help.
          </p>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT → FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-orange-100 shadow-xl rounded-2xl p-6 md:p-8"
          >
            <form className="space-y-5">

              <FormField label="Your Name" placeholder="Enter your name" />
              <FormField
                label="Mobile Number"
                placeholder="Enter your mobile number"
                type="tel"
              />

              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Requirement Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your bulk order requirement..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 
                  focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 
                text-white font-semibold rounded-xl text-lg shadow-md transition"
              >
                Submit Enquiry
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT → CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Bulk Food Orders Made Simple
            </h3>

            <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
              Looking to place a bulk food order for train passengers or group
              travel?
            </p>

            <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
              At <span className="font-semibold text-gray-900">Agarwal Rabdiwala</span>,
              we prepare fresh vegetarian & Jain meals in bulk with hygienic
              packaging and reliable on-time delivery at
              <span className="font-semibold"> Abu Road Railway Station</span>.
            </p>

            <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
              Share your requirement and our team will contact you to help plan
              everything smoothly — from menu selection to final delivery.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Highlight text="Freshly Cooked Meals" />
              <Highlight text="Jain & Vegetarian Options" />
              <Highlight text="Reliable Train Delivery" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function FormField({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-gray-800 font-semibold mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 
        focus:ring-2 focus:ring-orange-500 outline-none transition"
      />
    </div>
  );
}

function Highlight({ text }) {
  return (
    <span className="px-4 py-2 bg-orange-50 text-orange-700 
    font-medium text-sm rounded-full border border-orange-200">
      {text}
    </span>
  );
}
