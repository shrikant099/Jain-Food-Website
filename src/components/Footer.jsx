"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-6 mt-20 border-t border-orange-100">

      {/* TOP AREA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <Image
          src="/logo1.png"
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto mb-4 w-40"
        />

        <p className="text-gray-700 font-medium break-all">
          sanjaysinghal265@gmail.com
        </p>

        <div className="max-w-xl mx-auto mt-6 text-gray-900 text-base md:text-lg font-medium leading-relaxed">
          Agarwal Rabdiwala, Railway Parking Area,<br />
          Abu Road Railway Station, Rajasthan – 307026, India
        </div>
      </motion.div>

      {/* IMPORTANT LINKS (MOBILE PERFECT) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-10"
      >
        <div className="
          flex flex-col gap-8 sm:flex-row flex-wrap 
          justify-center items-center 
       sm:gap-10 md:gap-10 
          text-gray-700 text-sm font-medium
          md:flex-row
        ">
          <Link href="/about-us" className="hover:text-orange-600 transition">About Us</Link>
          <Link href="/privacy-policy" className="hover:text-orange-600 transition">Privacy & Policy</Link>
          <Link href="/terms-conditions" className="hover:text-orange-600 transition">Terms & Conditions</Link>
          <Link href="/disclaimer" className="hover:text-orange-600 transition">Disclaimer</Link>
          <Link href="/refund-policy" className="hover:text-orange-600 transition">Return & Refund Policy</Link>
        </div>
      </motion.div>

      {/* CONTACT ROW – NOW FULLY MOBILE RESPONSIVE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto px-6 mt-12 
          flex flex-col md:flex-row 
          justify-between items-center 
          gap-6 text-gray-700
        "
      >
        {/* CONTACT INFO MOBILE STACK */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-orange-600" />
            <span className="break-all cursor-pointer">
              <a href="tel:+918107139044"> +91 8107139044 </a>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-orange-600" />
            <span className="break-all cursor-pointer">
              <a href="mailto:agarwalrabdiwala@gmail.coms">agarwalrabdiwala@gmail.com</a>
            </span>
          </div>
        </div>

        {/* SOCIAL ICONS CENTER ON MOBILE */}
        <div className="flex gap-4 justify-center">
          {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.15 }}
              className="bg-white shadow p-3 rounded-xl hover:bg-orange-50 transition"
              href="#"
            >
              <Icon className="w-5 h-5 text-orange-600" />
            </motion.a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="text-gray-700 text-center">
          ©2025 – <span className="font-semibold">AGARWAL RABDIWALA</span>
        </div>
      </motion.div>

      {/* WHATSAPP BUTTON (no change – already perfect) */}
      <a
        href="https://wa.me/918107139044"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 px-5 py-3 shadow-xl rounded-full 
                   text-white flex items-center gap-2 hover:bg-green-700 transition"
      >
        <MessageCircle className="w-5 h-5" />
        How can I help you?
      </a>
    </footer>
  );
}
