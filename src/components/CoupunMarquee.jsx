"use client";

import { motion } from "framer-motion";
import { Percent } from "lucide-react";

const coupons = [
  {
    title: "10% OFF on Train Food Orders",
    desc: "Valid till 31 Dec 2025",
    mov: "Min Order ₹500",
    code: "FLAT10",
  },
  {
    title: "15% OFF on Bulk Orders",
    desc: "Perfect for group & family travel",
    mov: "Min Order ₹2500",
    code: "BULK15",
  },
  {
    title: "₹50 OFF on Train Meals",
    desc: "Limited time railway offer",
    mov: "Min Order ₹499",
    code: "HAPPY50",
  },
  {
    title: "₹35 OFF for Students",
    desc: "Budget friendly meals",
    mov: "Min Order ₹350",
    code: "STUD35",
  },
];

export default function CouponMarquee() {
  return (
    <section className="w-full bg-white py-10 overflow-hidden">
      {/* TITLE */}
      <h3 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-8">
        Exclusive <span className="text-orange-500">Offers</span> 
      </h3>

      {/* MARQUEE WRAPPER */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 45, // 👈 slow & premium
            ease: "linear",
          }}
        >
          {/* DOUBLE LIST FOR PERFECT LOOP */}
          {[...coupons, ...coupons].map((c, i) => (
            <CouponCard key={i} coupon={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- COUPON CARD ---------------- */

function CouponCard({ coupon }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        min-w-[280px] md:min-w-[360px]
        bg-gradient-to-br from-white to-orange-50
        border border-orange-200
        rounded-2xl
        shadow-md hover:shadow-xl
        px-5 py-4
        flex gap-4 items-start
        transition-all
      "
    >
      {/* ICON */}
      <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
        <Percent className="w-5 h-5 text-orange-600" />
      </div>

      {/* TEXT */}
      <div>
        <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">
          {coupon.title}
        </p>

        <p className="text-gray-600 text-xs md:text-sm mt-1">
          {coupon.desc}
        </p>

        <p className="text-gray-500 text-xs mt-1">{coupon.mov}</p>

        {/* CODE */}
        <span
          className="
            inline-block mt-3
            px-3 py-1
            text-sm font-semibold
            text-orange-600
            border border-dashed border-orange-400
            rounded-lg
            bg-white
          "
        >
          {coupon.code}
        </span>
      </div>
    </motion.div>
  );
}
