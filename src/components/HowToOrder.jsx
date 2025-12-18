"use client";

import { motion } from "framer-motion";
import { MessageCircle, Train, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HowToOrder() {
  return (
    <section className="py-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        How to Order Train Food on WhatsApp
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
        Order fresh vegetarian & Jain meals easily via WhatsApp and get hot food
        delivered at your train seat at Abu Road Railway Station.
      </p>

      <div className="max-w-7xl mx-auto px-6 mt-14 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <MessageCircle className="w-10 h-10 text-orange-600" />,
            title: "Send Order Details on WhatsApp",
            desc: "Share your train number, journey date, coach and seat number with us on WhatsApp.",
          },
          {
            icon: <Train className="w-10 h-10 text-orange-600" />,
            title: "Choose Your Meal",
            desc: "Select from our hygienic vegetarian & Jain menu prepared fresh daily.",
          },
          {
            icon: <CheckCircle className="w-10 h-10 text-orange-600" />,
            title: "Enjoy Food at Your Seat",
            desc: "Get hot, fresh food delivered on time at Abu Road Railway Station.",
          },
        ].map((step, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl shadow-md p-8 text-center border border-orange-100">
            <div className="flex justify-center mb-5">{step.icon}</div>
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-3">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-14 flex justify-center gap-4 flex-wrap">
        <a
          href="https://wa.me/918290951295"
          target="_blank"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Order Now on WhatsApp
        </a>

        <Link
          href="/contact"
          className="bg-white border px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
