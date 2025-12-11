"use client";

import { motion } from "framer-motion";
import { MessageCircle, Train, CheckCircle } from "lucide-react";

export default function HowToOrder() {
  const steps = [
    {
      icon: <MessageCircle className="w-10 h-10 text-orange-600" />,
      title: "Send Us a WhatsApp Message",
      desc: "Just send your Train Number, Journey Date, Coach and Seat Number on WhatsApp — and we immediately begin processing your order.",
    },
    {
      icon: <Train className="w-10 h-10 text-orange-600" />,
      title: "Choose Your Pure Jain Meal",
      desc: "We will share our fresh, hygienic, and 100% onion–garlic–free Jain menu on WhatsApp. Pick your favourite items effortlessly.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-orange-600" />,
      title: "Get Hot Food on Your Seat",
      desc: "Your food is prepared fresh as per your train timing and delivered hot, pure and on time — directly at your seat.",
    },
  ];

  return (
    <section className="relative py-20 bg-white">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        How to Order on WhatsApp
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-lg"
      >
        Get fresh, pure Jain food delivered to your train seat in just a few simple steps.
      </motion.p>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid md:grid-cols-3 gap-10">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition group border border-orange-100"
          >
            <div className="flex justify-center mb-5">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className="p-4 bg-orange-100 rounded-full shadow-sm"
              >
                {item.icon}
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <a
          href="https://wa.me/91xxxxxxxxxx"
          target="_blank"
          className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition"
        >
          <MessageCircle className="w-6 h-6" /> Order Now on WhatsApp
        </a>
      </motion.div>

    </section>
  );
}
