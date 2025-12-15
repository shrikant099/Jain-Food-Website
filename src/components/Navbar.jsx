"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { selectCartCount } from "@/features/cart/selector";
import { AnimatedOrderButton } from "./AnimateOrderButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const count = useSelector(selectCartCount);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-[32px] left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200"
            : "bg-white shadow-sm"}
        `}
      >
        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">

          <div className="flex items-center justify-between h-[90px]">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo1.png" alt="logo" className="w-24 h-auto object-contain" />
            </Link> 
            <Link href="/services/train-delivery" className="md:hidden">
              <button className="order-btn">
                Order Now
              </button>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10">
              <NavItem href="/about-us">About Us</NavItem>

              {/* SERVICES DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-orange-600 transition">
                  <span className="relative after:block after:w-0 after:h-[2px] after:bg-orange-500
                    after:transition-all after:duration-300 group-hover:after:w-full">
                    Services
                  </span>
                  <ChevronDown size={16} />
                </button>

                {/* DROPDOWN MENU */}
                <div className="absolute top-10 left-0 w-44 bg-white border shadow-md rounded-md 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <DropdownItem href="/services/home-delivery">Home Delivery</DropdownItem>
                  <DropdownItem href="/services/train-delivery">Train Delivery</DropdownItem>
                </div>
              </div>

              <NavItem href="/blogs">Blogs</NavItem>
              <NavItem href="/privacy-policy">Privacy & Policy</NavItem>
            </div>

            {/* DESKTOP RIGHT ICONS */}
            <div className="hidden md:flex items-center gap-6">
              {/* <Search className="w-6 h-6 text-gray-800 cursor-pointer hover:text-orange-600" /> */}

              <Link href="/checkout" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-orange-600 cursor-pointer" />
                {count > 0 && (
                  <span className="absolute -top-2 -right-3 bg-orange-600 text-white 
                    text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white shadow-md px-6 py-4 space-y-3"
            >

              <MobileItem href="/" setIsOpen={setIsOpen}>Home</MobileItem>
              <MobileItem href="/about-us" setIsOpen={setIsOpen}>About Us</MobileItem>

              {/* MOBILE DROPDOWN */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex justify-between py-2 text-gray-700 font-medium"
                >
                  Services <ChevronDown size={18} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-4 space-y-2 overflow-hidden"
                    >
                      <MobileItem href="/services/home-delivery" setIsOpen={setIsOpen}>
                        Home Delivery
                      </MobileItem>
                      <MobileItem href="/services/train-delivery" setIsOpen={setIsOpen}>
                        Train Delivery
                      </MobileItem>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileItem href="/blogs" setIsOpen={setIsOpen}>Blogs</MobileItem>
              <MobileItem href="/privacy-policy" setIsOpen={setIsOpen}>Privacy & Policy</MobileItem>

              {/* MOBILE CART */}
              <div className="flex items-center gap-5 pt-3">

                <Search className="w-6 h-6 text-gray-700" />
                <Link href="/checkout" className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-800" />
                  {count > 0 && (
                    <span className="absolute -top-2 -right-3 bg-orange-600 text-white 
                      text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </Link>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* SPACER */}
      <div className="h-20"></div>
    </>
  );
}

/* ------------ SUB COMPONENTS ------------- */

function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-orange-600 transition relative group"
    >
      <span className="relative after:block after:w-0 after:h-[2px] after:bg-orange-500
        after:transition-all after:duration-300 group-hover:after:w-full">
        {children}
      </span>
    </Link>
  );
}

function DropdownItem({ href, children }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
    >
      {children}
    </Link>
  );
}

function MobileItem({ href, children, setIsOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="block py-2 text-gray-700 font-medium"
    >
      {children}
    </Link>
  );
}
