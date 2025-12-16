"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full mt-10 bg-white">

      {/* ============================== */}
      {/* ABOUT HERO (NEW – FULL WIDTH)  */}
      {/* ============================== */}

      <div className="relative w-full overflow-hidden">

        {/* FULL WIDTH IMAGE */}
        <Image
          src="/about/about-us-heroImage.png"
          alt="About Agarwal Rabdiwala"
          width={1920}
          height={900}
          priority
          className="w-full h-auto object-contain"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* GRADIENT DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-2xl md:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-lg">
            About Agarwal Rabdiwala
          </h1>

          {/* ORANGE UNDERLINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[3px] sm:h-[3px] md:h-[4px] lg:h-[5px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4"
          />

          <p className="mt-4 text-[14px] md:text-xl text-orange-100 font-semibold max-w-[900px]">
            Giving Fresh, Hygienic & Delicious Meals Since 2017
          </p>
        </motion.div>
      </div>

      {/* ============================== */}
      {/* ABOUT CONTENT (UNCHANGED)      */}
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
              We started this outlet with the purpose of giving the authentic taste of rabdi. Our <b>famous signature dish Rabdi</b> is loved by locals and passers by alike.
            </p>

            <p className="mt-4">
              With over <b>20,000+ successful food deliveries in trains</b> and a proud <b>partnership with IRCTTC</b>, we continue to serve train passengers.
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
              Our goal is to serve vegetarian meals that are safe, fresh, and restaurant-quality.
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
              Recipes based on traditional cooking by the best cooks of Abu Road with local flavour.
            </p>
          </motion.div>

          {/* BLOCK 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-600">
              CUSTOMER SATISFACTION
            </h2>

            <p className="mt-4">
              8 years of delivering the best taste with food safety and hygiene.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
