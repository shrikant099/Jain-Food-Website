"use client";

import { Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-orange-100 mt-20">
      <div className="max-w-7xl mx-auto px-5 py-14">

        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 text-sm text-gray-700">

          {/* LOGO + SEO TEXT */}
          <div>
            <Image src="/logo1.png" alt="Agarwal Rabdiwala" width={150} height={60} />
            <p className="mt-3 leading-relaxed">
              Agarwal Rabdiwala is a trusted IRCTC food partner providing
              fresh vegetarian train food delivery at{" "}
              <strong>Abu Road Railway Station</strong>.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services/train-delivery">Menu</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/bulk-order">Bulk Order</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* IMPORTANT */}
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">Important</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">Contact</h4>

            <div className="space-y-2">
              <a href="tel:+918107139044" className="flex items-center gap-2">
                <Phone size={14} /> +91 8107139044
              </a>
              <a href="mailto:agarwalrabdiwala@gmail.com" className="flex items-center gap-2">
                <Mail size={14} /> agarwalrabdiwala@gmail.com
              </a>
            </div>

            {/* 👉 GOOGLE BUSINESS PROFILE LINK (SEO FIX) */}
            <div className="mt-3">
              <a
                href="https://www.google.com/search?kgmid=/g/11gg654w9j"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-semibold hover:underline"
              >
                ⭐ View on Google Business Profile
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener"><Facebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener"><Instagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener"><Youtube /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-10">
          © 2025 – <strong>Agarwal Rabdiwala</strong>
        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918107139044"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 px-4 py-3 rounded-full shadow-lg text-white flex items-center gap-2"
      >
        <MessageCircle size={18} />
        Help
      </a>
    </footer>
  );
}
