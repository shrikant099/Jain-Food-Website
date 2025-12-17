"use client";

import { Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-orange-100 mt-20">

      <div className="max-w-7xl mx-auto px-5 py-14">

        {/* ===== MAIN GRID ===== */}
        <div
          className="
            grid place-items-center grid-cols-2 gap-15 text-sm text-gray-700
            md:grid-cols-4 md:gap-10
          "
        >

          {/* LOGO + DESC */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo1.png"
              alt="Agarwal Rabdiwala"
              width={150}
              height={60}
              className="mb-3"
            />

            <p className="leading-relaxed max-w-[220px] md:max-w-[260px]">
              Serving fresh and hygienic pure vegetarian meals in trains since 2017.
              Agarwal Rabdiwala delivers restaurant-quality food right to your train seat.
            </p>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">
              Important Links
            </h4>
            <ul className="space-y-2">
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="p-0">


            <div>
              <h4 className="font-semibold  text-orange-600 mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/services/train-delivery">Bulk Order Enquiry</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
              </ul>
            </div>
          </div>
          {/* RAILWAY INFO */}
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">
              Indian Railway Info.
            </h4>
            <ul className="space-y-2">
              <li><Link href="#">PNR Status Check</Link></li>
              <li><Link href="#">Train Coach Position</Link></li>
              <li><Link href="#">IRCTC Train Schedule</Link></li>
            </ul>
          </div>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="mt-14 flex flex-col items-center gap-4 text-gray-700">

          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-600" />
              <a href="tel:+918107139044">+91 8107139044</a>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-600" />
              <a href="mailto:agarwalrabdiwala@gmail.com">
                agarwalrabdiwala@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white p-3 rounded-xl shadow hover:bg-orange-50 transition"
              >
                <Icon className="w-5 h-5 text-orange-600" />
              </a>
            ))}
          </div>

          <div className="text-xs text-gray-600 mt-2">
            © 2025 – <b>AGARWAL RABDIWALA</b>
          </div>
        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918107139044"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 px-4 py-3 rounded-full shadow-lg 
                   text-white flex items-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        Help
      </a>
    </footer>
  );
}
