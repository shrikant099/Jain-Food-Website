"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/features/cart/cartSlice";
import { selectCartItems } from "@/features/cart/selector";
import { motion } from "framer-motion";
import { meals } from "@/content";
export default function BestSellerMeals() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const getQty = (name) => (cartItems && cartItems[name] ? cartItems[name].qty : 0);

  const handleAdd = (item) => dispatch(addItem(item));
  const handleRemove = (item) => dispatch(removeItem(item));

  return (
    <section className="py-20 bg-gray-50">
      <h1 className="text-center text-4xl font-extrabold text-gray-900">Best Seller Meals</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
        Our most loved, fresh & hygienic Jain-friendly meals.
      </p>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {meals.map((m) => {
          const qty = getQty(m.name);
          return (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-md border border-orange-200 overflow-hidden">
              <div className="relative w-full h-56">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{m.name}</h3>
                <p className="text-gray-600 mt-2">{m.desc}</p>
                <p className="text-orange-600 text-xl font-bold mt-3">₹{m.price}</p>

                {qty === 0 ? (
                  <button onClick={() => handleAdd(m)} className="mt-5 w-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition px-6 py-3 rounded-xl font-semibold">
                    ADD
                  </button>
                ) : (
                  <div className="mt-5 flex items-center justify-center gap-4">
                    <button onClick={() => handleRemove(m)} className="w-10 h-10 rounded-full bg-orange-600 text-white text-xl">−</button>
                    <div className="text-xl font-bold">{qty}</div>
                    <button onClick={() => handleAdd(m)} className="w-10 h-10 rounded-full bg-orange-600 text-white text-xl">+</button>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a href="/services/train-delivery" className="px-8 py-3 bg-orange-600 text-white rounded-xl text-lg font-semibold hover:bg-orange-700 transition shadow-lg">
          View All Meals →
        </a>
      </div>
    </section>
  );
}
