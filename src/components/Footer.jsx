"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";

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
        
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={90}
          height={90}
          className="mx-auto mb-4"
        />

        {/* Email */}
        <p className="text-gray-700 font-medium">
          agarwalrabdiwala@gmail.com
        </p>

        {/* Address */}
        <div className="max-w-2xl mx-auto mt-10 text-gray-900 text-lg font-medium leading-relaxed">
          Agarwal Rabdiwala, Railway Parking Area,  
          Abu Road Railway Station, Rajasthan – 307026, India
        </div>
      </motion.div>

      {/* CONTACT ROW */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Phone + Email */}
        <div className="flex gap-6 items-center text-gray-700">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-orange-600" />
            <span>+91 81071 39044</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-orange-600" />
            <span>agarwalrabdiwala@gmail.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
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

        {/* Copyright */}
        <div className="text-gray-700 text-center">
          ©2025 – <span className="font-semibold">AGARWAL RABDIWALA</span>
        </div>
      </motion.div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/91xxxxxxxxxx"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 px-5 py-3 shadow-xl rounded-full text-white flex items-center gap-2 hover:bg-green-700 transition"
      >
        <MessageCircle className="w-5 h-5" />
        How can I help you?
      </a>
    </footer>
  );
}
