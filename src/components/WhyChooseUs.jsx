"use client";

import React from 'react'
import { motion } from 'framer-motion';
const WhyChooseUs = () => {
    const boxes = [
        {
            title: "100% Pure Vegetarian",
            desc: "Meals prepared with vegetarian ingredients only — Jain options available.",
            icon: "🥗",
        },
        {
            title: "Hygiene First",
            desc: "Cooked & packed under strict hygiene checks and regular inspections.",
            icon: "🧼",
        },
        {
            title: "20,000+ Deliveries",
            desc: "Trusted by thousands of passengers with a proud IRCTC partnership.",
            icon: "🚄",
        },
    ];

    return (
        <section className="py-6 pb-10">
            <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold">Why Choose <span className='text-orange-600'>Agarwal Rabdiwala</span> </h3>
                <p className="text-gray-600 mt-2">Fresh, trusted & timely meals — every single time.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {boxes.map((b, idx) => (
                    <motion.div
                        key={b.title}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08, duration: 0.45 }}
                        className="bg-white rounded-xl p-5 md:p-6 shadow-sm flex flex-col gap-3"
                    >
                        <div className="text-4xl">{b.icon}</div>
                        <h4 className="font-semibold text-lg md:text-xl">{b.title}</h4>
                        <p className="text-gray-600 text-sm md:text-base">{b.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs