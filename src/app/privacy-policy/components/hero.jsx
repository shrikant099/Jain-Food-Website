"use client";

import React from 'react'
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <>
            <section className="relative w-full bg-black text-white py-24 md:py-32 flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto px-6 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                        Privacy & Policy
                    </h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 200 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-[4px] bg-orange-500 rounded-full mx-auto mt-3"
                    />

                    <p className="mt-6 text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed">
                        Your privacy matters to us. Read how we collect, use and protect your data.
                    </p>
                </motion.div>
            </section>
        </>
    )
}

export default Hero