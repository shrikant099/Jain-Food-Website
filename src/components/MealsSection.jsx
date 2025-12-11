"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function MealsSection() {
  const allMeals = [
    {
      name: "Deluxe Thali",
      price: 200,
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1604908554045-027ab2b9b80b?auto=format&fit=crop&w=1000&q=80",
      desc: "2 Veg Sabji + Dal + Rice + Roti + Salad + Sweet + Chaas",
    },
    {
      name: "Mini Thali",
      price: 170,
      discount: "10% OFF",
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=80",
      desc: "1 Veg Sabji + Dal + Rice + 4 Roti + Salad + Chaas",
    },
    {
      name: "Paneer Masala Roti",
      price: 170,
      discount: "12% OFF",
      img: "https://images.unsplash.com/photo-1605475128022-9f3a7848fbd9?auto=format&fit=crop&w=1000&q=80",
      desc: "Paneer Masala (300ml) + 5 Roti + Salad",
    },
    {
      name: "Special Jain Thali",
      price: 220,
      discount: "18% OFF",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80",
      desc: "2 Jain Sabji + Kadhi + Rice + 6 Roti + Sweet + Chaas",
    },
    {
      name: "Veg Biryani (Jain)",
      price: 160,
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1604908177522-0403f8e4d6c5?auto=format&fit=crop&w=1000&q=80",
      desc: "Jain Veg Biryani + Raita + Salad",
    },
    {
      name: "Masala Poori Meal",
      price: 150,
      discount: "10% OFF",
      img: "https://images.unsplash.com/photo-1626082921461-9a3cd908aa8f?auto=format&fit=crop&w=1000&q=80",
      desc: "5 Poori + Sabji + Rice + Pickle + Salad",
    },

    // More items for view more (6)
    {
      name: "Jain Combo Meal",
      price: 180,
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1631700737054-f5f6227263de?auto=format&fit=crop&w=1000&q=80",
      desc: "Jain Sabji + Dal + Rice + Roti + Salad",
    },
    {
      name: "Roti Sabji Pack",
      price: 120,
      discount: "8% OFF",
      img: "https://images.unsplash.com/photo-1598511728194-d63ff67a5ff1?auto=format&fit=crop&w=1000&q=80",
      desc: "1 Sabji + 4 Roti + Pickle",
    },
    {
      name: "Dal Khichdi Jain",
      price: 140,
      discount: "12% OFF",
      img: "https://images.unsplash.com/photo-1629743836794-adf25298d865?auto=format&fit=crop&w=1000&q=80",
      desc: "Jain Khichdi + Kadhi + Salad",
    },
    {
      name: "Full Rajasthani Meal",
      price: 250,
      discount: "20% OFF",
      img: "https://images.unsplash.com/photo-1600628422011-bc1cf434cbe0?auto=format&fit=crop&w=1000&q=80",
      desc: "Dal Baati + Rice + Churma + Salad",
    },
    {
      name: "Jain Rice Bowl",
      price: 130,
      discount: "10% OFF",
      img: "https://images.unsplash.com/photo-1587840171670-8b850147754e?auto=format&fit=crop&w=1000&q=80",
      desc: "Rice + Jain Mix Veg Curry",
    },
    {
      name: "Healthy Salad Bowl",
      price: 110,
      discount: "8% OFF",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
      desc: "Green Salad + Fruits + Dressing",
    },
  ];

  const [visible, setVisible] = useState(6);

  const handleViewMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-4xl font-extrabold text-gray-900">
        Our Special Meals
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
        Pure, hygienic and freshly prepared Jain-friendly meals.
      </p>

      {/* Items */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-12">
        <AnimatePresence>
          {allMeals.slice(0, visible).map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-orange-200 transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 text-sm rounded-lg font-semibold shadow">
                  {item.discount}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>

                <p className="text-orange-600 text-xl font-bold mt-3">
                  ₹{item.price}
                </p>

                <button className="mt-5 w-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition px-6 py-3 rounded-xl font-semibold">
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      {visible < allMeals.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleViewMore}
            className="px-8 py-3 bg-orange-600 text-white rounded-xl text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
