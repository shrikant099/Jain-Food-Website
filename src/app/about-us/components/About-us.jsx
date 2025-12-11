"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-white w-full">

      <div className="relative w-full flex justify-center bg-black">
        <div className="relative w-full max-w-[1500px] h-[420px] md:h-[500px] lg:h-[560px] xl:h-[600px] overflow-hidden">

          {/* HERO BACKGROUND IMAGE */}
          <Image
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1800&q=90"
            alt="About Banner"
            fill
            className="object-cover object-center scale-[1.15] md:scale-100 transition-all"
            priority
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* RADIAL ORANGE GLOW */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/25 blur-[120px] rounded-full opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

          {/* HERO TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white max-w-[1000px] mx-auto drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
              About Agarwal Rabdiwala
            </h1>

            {/* UNDERLINE ANIMATION */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-[4px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-3"
            />

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 text-lg md:text-xl text-orange-100 font-semibold max-w-[900px] mx-auto drop-shadow"
            >
              Giving Fresh, Hygienic & Delicious Meals Since 2017
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ============================== */}
      {/* WHITE CONTENT SECTION BELOW    */}
      {/* ============================== */}

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1350px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-20 space-y-14 text-gray-700 leading-relaxed">

          {/* BLOCK 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              Located in the railway parking area of <b>Abu Road Railway Station</b>, Agarwal Rabdiwala has been a trusted restaurant for food delivery in trains among train travelers since 2017. It is founded by <b>Sanjay Singhal</b> and built on strong family values, outlet is known for delivering <b>pure vegetarian meals at restaurant dining and in trains as well</b>, hygienically prepared meals <b>right at your train seat</b>—across all coach types, including Sleeper, AC, and General.
            </p>
          </motion.div>

          {/* BLOCK 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-600">
              A Journey that started through flavourful famous dish Rabdi
            </h2>

            <p className="mt-4">
              We started this outlet with the purpose of giving the authentic taste of rabdi. Our <b>famous signature dish Rabdi</b> is loved by locals and passers by alike, and our Veg Thalis—both single and bulk orders—have become a favorite for passengers who crave homemade-style meals while having a journey in trains.
            </p>

            <p className="mt-4">
              With over <b>20,000+ successful food deliveries in trains</b> and a proud <b>partnership with IRCTT</b>, we continue to serve train passengers with the flavourful, tasty meals.
            </p>
          </motion.div>

          {/* BLOCK 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-600">
              Agarwal Rabdiwala goal is to deliver taste at dining and trains.
            </h2>

            <p className="mt-4">
              Our goal at Agarwal Rabdiwala is to serve every train passenger, whether they are traveling alone or with a group, vegetarian meals that are as good as what you would get at a restaurant and are safe to eat.
            </p>

            <p className="mt-4">
              We think that good food can make a long train ride more enjoyable. That’s why we put freshness first: all of our meals are made with fresh ingredients and cooked right before your train arrives.
            </p>
          </motion.div>

          {/* BLOCK 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-600">TASTE</h2>

            <p className="mt-4">
              From learning mistakes we are now at some level to ensure taste in our dinings and at train seats.
              Recipes that are based on traditional way of cooking by the best cooks of Abu Road with a little bit of local flavor.
            </p>
          </motion.div>

          {/* BLOCK 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-600">CUSTOMER SATISFACTION</h2>

            <p className="mt-4">
              It has been 8 years of delivering the best taste to our beloved customers and passengers in train.
              So each and every time we ensure that everything should be fine and delightful for customers.
            </p>

            <p className="mt-4">
              Many people trust us (Agarwal Rabdiwala). Food safety officers check our store regularly to make sure it is clean and safe.
            </p>

            <p className="mt-4">
              Our bulk food delivery service is very popular with groups: families, student groups, and pilgrims choose us.
              Affordable bulk meals start from ₹100, and we deliver customizable bulk meals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
