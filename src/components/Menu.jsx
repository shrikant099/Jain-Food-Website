"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/features/cart/cartSlice";
import { selectCartItems } from "@/features/cart/selector";
import { menuCategories } from "@/content";
import MenuHeader from "./MenuHeader";
export default function MenuFAQ() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const getQty = (name) => (cartItems && cartItems[name] ? cartItems[name].qty : 0);

  const [openCat, setOpenCat] = useState(null);
  const toggle = (i) => setOpenCat(openCat === i ? null : i);



  return (
    <div className="max-w-8xl mx-auto px-1 sm:px-2 md:px-4">
      <MenuHeader />
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center  mt-10 mb-8"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Menu
        </h2>
        <div className="mt-3 w-20 md:w-28 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto"></div>
      </motion.div>

      {menuCategories.map((cat, i) => {
        const open = openCat === i;

        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 shadow-md mb-4 overflow-hidden"
          >
            {/* CATEGORY HEADER */}
            <button
              onClick={() => toggle(i)}
              className="w-full px-4 md:px-6 py-4 flex justify-between items-center 
                         font-semibold text-xl md:text-2xl text-gray-900"
            >
              {cat.name}

              {open ? (
                <ChevronDown className="w-5 md:w-7 h-5 md:h-7 text-orange-600" />
              ) : (
                <ChevronRight className="w-5 md:w-7 h-5 md:h-7 text-gray-600" />
              )}
            </button>

            {/* ITEMS */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-t bg-white"
                >
                  {cat.items.map((item) => {
                    const qty = getQty(item.name);

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-between items-center 
                                   px-3 md:px-6 py-4 md:py-6 border-b last:border-none"
                      >
                        {/* LEFT SIDE */}
                        <div className="flex gap-3 md:gap-5 items-center">
                          <Image
                            src={item.img}
                            width={70}
                            height={70}
                            alt={item.name}
                            className="rounded-xl object-cover shadow-md w-[75px] h-[75px] 
                                       md:w-[100px] md:h-[100px]"
                          />

                          <div>
                            <p className="font-semibold text-base md:text-2xl text-gray-900 leading-tight">
                              {item.name}
                            </p>
                            {item.desc && (
                              <p className="text-gray-600 text-[11px] md:text-sm mt-1">
                                {item.desc}
                              </p>
                            )}
                            <p className="text-orange-600 font-bold text-sm md:text-xl mt-1">
                              ₹{item.price}
                            </p>
                          </div>
                        </div>

                        {/* RIGHT SIDE BUTTONS */}
                        {qty === 0 ? (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => dispatch(addItem(item))}
                            className="px-3 ml-4 py-1.5 md:px-6 md:py-2 border border-orange-600 
                                       rounded-lg text-orange-600 text-sm md:text-lg font-semibold
                                       hover:bg-orange-600 hover:text-white transition"
                          >
                            Add
                          </motion.button>
                        ) : (
                          <div className="flex items-center gap-2 md:gap-4">

                            {/* MINUS BTN */}
                            <motion.button
                              whileTap={{ scale: 0.8 }}
                              whileHover={{ scale: 1.1 }}
                              onClick={() => dispatch(removeItem(item))}
                              className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-600 
                                         text-white text-lg md:text-2xl font-bold flex items-center 
                                         justify-center shadow-md"
                            >
                              −
                            </motion.button>

                            {/* QTY */}
                            <motion.span
                              key={qty}
                              initial={{ scale: 0.7, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="text-lg md:text-2xl font-bold"
                            >
                              {qty}
                            </motion.span>

                            {/* PLUS BTN */}
                            <motion.button
                              whileTap={{ scale: 0.8 }}
                              whileHover={{ scale: 1.1 }}
                              onClick={() => dispatch(addItem(item))}
                              className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-600 
                                         text-white text-lg md:text-2xl font-bold flex items-center 
                                         justify-center shadow-md"
                            >
                              +
                            </motion.button>

                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
