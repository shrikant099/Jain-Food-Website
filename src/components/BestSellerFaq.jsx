"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { meals } from "@/content";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/features/cart/cartSlice";
import { selectCartItems } from "@/features/cart/selector";

export default function BestsellerFAQ() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const getQty = (name) =>
    cartItems && cartItems[name] ? cartItems[name].qty : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md mb-4">

      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-4 flex justify-between items-center 
                   font-semibold text-lg text-gray-900"
      >
        ⭐ Bestseller Meals
        {open ? (
          <ChevronDown className="w-5 h-5 text-orange-600" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600" />
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
            className="border-t"
          >
            {meals.map((item) => {
              const qty = getQty(item.name);

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-between items-center px-4 py-4 border-b last:border-none"
                >
                  {/* LEFT */}
                  <div className="flex gap-3 items-center">
                    <Image
                      src={item.img}
                      width={70}
                      height={70}
                      alt={item.name}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                      <p className="text-orange-600 font-bold">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  {qty === 0 ? (
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="border border-orange-600 text-orange-600 
                                 px-3 py-1 rounded-lg font-semibold text-sm
                                 hover:bg-orange-600 hover:text-white transition"
                    >
                      Add
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => dispatch(removeItem(item))}
                        className="w-8 h-8 rounded-full bg-orange-600 
                                   text-white font-bold"
                      >
                        −
                      </button>

                      <span className="font-bold">{qty}</span>

                      <button
                        onClick={() => dispatch(addItem(item))}
                        className="w-8 h-8 rounded-full bg-orange-600 
                                   text-white font-bold"
                      >
                        +
                      </button>
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
}
