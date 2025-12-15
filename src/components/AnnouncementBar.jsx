"use client"

import { useState, useEffect } from "react"
import { Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AnnouncementBar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={cn(
                "w-full fixed top-0 left-0 z-[60] transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/60"
                    : "bg-white border-b border-gray-100",
            )}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-8 sm:h-10 md:h-12">
                    {/* LEFT */}
                    <div className="flex items-center gap-1.5 sm:gap-3">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
                        <a href="tel:+918107139044" className="text-gray-800 font-semibold text-[10px] sm:text-sm md:text-[15px]">
                            +91 8107139044
                        </a>
                        /
                        <a href="tel:+918290951295" className="text-gray-800 font-semibold text-[10px] sm:text-sm md:text-[15px]">
                            +91 8290951295
                        </a>
                        <span className="hidden md:inline-block text-gray-500 text-sm">| Bulk Order Enquiry</span>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600" />
                        <a
                            href="mailto:sanjaysinghal265@gmail.com"
                            className="font-medium text-gray-700 text-[12px] sm:text-xs md:text-sm truncate max-w-[120px] sm:max-w-none"
                        >
                            sanjaysinghal265@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
