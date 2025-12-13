"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import MenuFAQ from "./Menu";
import BestsellerFAQ from "./BestSellerFaq";
import { useState } from "react";

export default function MenuHeader() {
    const [active, setActive] = useState("veg"); // veg | bestseller

    return (
        <div className="bg-white border-b border-gray-200">

            {/* TOP INFO */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4">
                <div className="w-[110px] h-[110px] relative rounded-xl overflow-hidden ">
                    <Image
                        src="/logo1.png"
                        alt="Agarwal Rabdiwala"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1">

                    <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                        Agarwal Rabdiwala
                    </h1>

                    <p className="text-sm text-gray-600">
                        Abu Road Railway Station • Train & Home Delivery
                    </p>

                    {/* RATING + MIN ORDER */}
                    <div className="flex items-center gap-4 mt-2">

                        <div className="flex items-center gap-1 bg-green-100 
                            text-green-700 px-2 py-1 rounded-md text-sm font-semibold">
                            <Star className="w-4 h-4 fill-green-600" />
                            4.8
                        </div>

                        <p className="text-sm text-gray-600">
                            Min order <span className="font-semibold text-gray-900">₹99</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* TAGS */}
            <div className="max-w-7xl mx-auto px-4 pb-4 flex gap-3">

                <div className="flex gap-3 mb-4">
                    <button
                        onClick={() => setActive("veg")}
                        className={`px-4 py-1 cursor-pointer rounded-full border font-semibold text-sm
          ${active === "veg"
                                ? "bg-green-100 border-green-600 text-green-700"
                                : "border-gray-300 text-gray-600"}`}
                    >
                        🟢 Veg
                    </button>

                    <button
                        onClick={() => setActive("bestseller")}
                        className={`px-4 py-1 cursor-pointer rounded-full border font-semibold text-sm
          ${active === "bestseller"
                                ? "bg-orange-100 border-orange-600 text-orange-600"
                                : "border-gray-300 text-gray-600"}`}
                    >
                        ⭐ Bestseller
                    </button>
                </div>
            </div>
            {/* CONTENT */}
            {/* {active === "veg" && <MenuFAQ />} */}

            {active === "bestseller" && <BestsellerFAQ />}
        </div>
    );
}
