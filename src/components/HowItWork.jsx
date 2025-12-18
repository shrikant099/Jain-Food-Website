"use client";

import { motion } from "framer-motion";
import { Ticket, CreditCard, Utensils } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white px-4">
      {/* TOP TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        {/* H2 – correct hierarchy */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          How It Works
        </h2>

        {/* SEO text */}
        <p className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto">
          Ordering <a href="/services/train-delivery" className="text-orange-600 font-medium underline">
            train food at Abu Road
          </a>{" "}
          is quick and simple with Agarwal Rabdiwala. Follow these three easy
          steps to enjoy fresh vegetarian & Jain meals delivered directly to
          your train seat.
        </p>

        <div className="w-24 h-2 bg-orange-500 rounded-full mx-auto mt-4"></div>
      </motion.div>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center">

        {/* STEP 1 */}
        <StepCard
          icon={<Utensils className="w-12 h-12 text-orange-600" />}
          title="Pick Your Favourite Meals"
          desc="Browse our menu and choose from a variety of fresh Jain and vegetarian meals."
          delay={0}
        />

        {/* STEP 2 */}
        <StepCard
          icon={<Ticket className="w-12 h-12 text-orange-600" />}
          title="Enter Your Train / PNR"
          desc="Share your PNR or train details so we can deliver food at Abu Road Railway Station."
          delay={0.15}
        />

        {/* STEP 3 */}
        <StepCard
          icon={<CreditCard className="w-12 h-12 text-orange-600" />}
          title="Enjoy Fresh Food at Your Seat"
          desc="Sit back and enjoy hygienic train food delivered hot and on time."
          delay={0.25}
        />
      </div>
    </section>
  );
}

/* STEP CARD */
function StepCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="
        bg-white shadow-xl border border-orange-100 rounded-2xl
        px-6 py-8 text-center w-full md:w-1/3
        flex flex-col items-center justify-center
        min-h-[220px]
      "
    >
      <div className="mb-4">{icon}</div>

      {/* H3 – correct */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600 mt-2">{desc}</p>
    </motion.div>
  );
}
