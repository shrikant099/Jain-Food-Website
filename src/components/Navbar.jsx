"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="flex items-center justify-between h-[90px]">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo1.png" alt="logo" className="w-30 h-30 object-contain" />
              {/* <span className="text-lg font-bold text-gray-800">Agarwal Rabdiwala</span> */}
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

                {/* DESKTOP DROPDOWN WITH MOTION */}
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 w-44 bg-white border shadow-md rounded-md 
                               opacity-0 invisible group-hover:opacity-100 group-hover:visible
                               transition-all duration-200 py-2"
                  >
                    <DropdownItem href="/services/home-delivery">Home Delivery</DropdownItem>
                    <DropdownItem href="/services/train-delivery">Train Delivery</DropdownItem>
                  </motion.div>
                </AnimatePresence>
              </div>

              <NavItem href="/blogs">Blogs</NavItem>
              <NavItem href="/privacy-policy">Privacy & Policy</NavItem>
            </div>

            {/* RIGHT ICONS */}
            <div className="hidden md:flex items-center gap-5">
              <Search className="icon" />
              <ShoppingCart className="icon" />
            </div>

            {/* MOBILE BUTTON */}
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
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white shadow-md px-6 py-4 space-y-3"
            >
              <MobileItem href="/" setIsOpen={setIsOpen}>Home</MobileItem>
              <MobileItem href="/about-us" setIsOpen={setIsOpen}>About Us</MobileItem>

              {/* MOBILE SERVICES DROPDOWN */}
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

              <div className="flex items-center gap-5 pt-2">
                <Search className="icon" />
                <ShoppingCart className="icon" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="h-20"></div>
    </>
  );
}

/* ============= COMPONENTS ============= */

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
