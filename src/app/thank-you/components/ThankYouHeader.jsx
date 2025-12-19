"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThankYouHeader() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">

        {/* LOGO */}
        <div className="w-22 h-22 relative shrink-0">
          <Link href={"/"} className="cursor-pointer">
            <Image
              src="/logo1.png"
              alt="Agarwal Rabdiwala"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        {/* BRAND NAME */}
        <div>
          <h1 className="text-lg md:text-lg font-semibold text-gray-900 leading-tight">
            Agarwal Rabdiwala
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Pure Jain Food Delivery
          </p>
        </div>

      </div>
    </header>
  );
}
