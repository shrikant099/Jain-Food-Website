"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react';
const OrderByCall = () => {
    return (
        <section className="py-20">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h4 className="text-xl md:text-2xl font-extrabold">Prefer to order by call?</h4>
                    <p className="mt-1 text-sm md:text-base">Call now and we will assist with your train delivery order.</p>
                </div>

                <a href="tel:+918107139044" className="mt-3 md:mt-0 inline-flex items-center gap-3 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold shadow">
                    <Phone className="w-5 h-5" /> +91 81071 39044
                </a>
            </motion.div>
        </section>
    )
}

export default OrderByCall