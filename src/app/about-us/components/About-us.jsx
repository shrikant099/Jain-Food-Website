"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full mt-10 bg-white">

      {/* ===== ABOUT HERO ===== */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/about/about-us-heroImage.png"
          alt="About Agarwal Rabdiwala Train Food Delivery at Abu Road"
          width={1920}
          height={900}
          priority
          className="w-full h-auto object-contain"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          {/* SINGLE H1 */}
          <h1 className="text-2xl md:text-5xl xl:text-6xl font-extrabold text-white">
            About Agarwal Rabdiwala
          </h1>

          <p className="mt-4 text-sm md:text-xl text-orange-100 font-semibold max-w-3xl">
            Trusted IRCTC Food Partner for Train Food Delivery at Abu Road Since 2017
          </p>
        </motion.div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="flex justify-center">
        <div className="max-w-6xl px-4 md:px-10 py-20 space-y-14 text-gray-700 leading-relaxed">

          <p>
            <strong>Agarwal Rabdiwala</strong> is located at the railway parking
            area of <strong>Abu Road Railway Station</strong> and has been serving
            fresh, hygienic and pure vegetarian meals to train passengers since
            2017. Founded by <strong>Sanjay Singhal</strong>, the brand is built
            on strong family values and food safety standards.
          </p>

          <p>
            We specialize in delivering restaurant-quality food directly to
            train seats across Sleeper, AC and General coaches. Our services
            include regular{" "}
            <Link
              href="/services/train-delivery"
              className="text-orange-600 font-semibold underline"
            >
              train food delivery
            </Link>{" "}
            and{" "}
            <Link
              href="/bulk-order"
              className="text-orange-600 font-semibold underline"
            >
              bulk food orders for trains
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-orange-600">
            Our Journey & Signature Dish – Rabdi
          </h2>

          <p>
            Agarwal Rabdiwala began its journey with the goal of delivering the
            authentic taste of Rabdi. Today, our signature Rabdi is loved by
            locals and train passengers alike.
          </p>

          <p>
            With over <strong>20,000+ successful train food deliveries</strong>
            and a proud partnership with <strong>IRCTC</strong>, we continue to
            serve thousands of passengers daily.
          </p>

          <h2 className="text-2xl font-bold text-orange-600">
            Our Mission
          </h2>

          <p>
            Our mission is to provide safe, fresh and hygienic vegetarian & Jain
            meals while maintaining consistent taste and timely delivery at Abu
            Road Railway Station.
          </p>

          <h2 className="text-2xl font-bold text-orange-600">
            Taste & Customer Satisfaction
          </h2>

          <p>
            We follow traditional cooking methods using local flavours and
            experienced cooks of Abu Road. For us, customer satisfaction,
            hygiene and taste always come first.
          </p>

        </div>
      </div>
    </section>
  );
}
