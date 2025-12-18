"use client";

import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const boxes = [
    {
      title: "100% Pure Vegetarian & Jain Meals",
      desc: "All meals are prepared using pure vegetarian ingredients with Jain food options available.",
      icon: "🥗",
    },
    {
      title: "Hygiene & Food Safety First",
      desc: "Meals are cooked and packed under strict hygiene standards to ensure freshness and safety.",
      icon: "🧼",
    },
    {
      title: "Trusted IRCTC Train Food Partner",
      desc: "Serving thousands of passengers with reliable train food delivery at Abu Road Railway Station.",
      icon: "🚄",
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* SEO HEADING */}
        <div className="text-center mb-6">
          {/* H2 – correct hierarchy */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-orange-600">Agarwal Rabdiwala</span> for Train Food at Abu Road
          </h2>

          {/* SEO STATIC TEXT */}
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Agarwal Rabdiwala is a trusted name for{" "}
            <strong>train food delivery at Abu Road Railway Station</strong>.
            As an IRCTC food partner, we focus on hygiene, taste and timely
            delivery to ensure passengers enjoy a smooth and satisfying journey.
          </p>
        </div>

        {/* TRUST BOXES */}
        <div className="grid md:grid-cols-3 gap-6">
          {boxes.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm flex flex-col gap-3"
            >
              <div className="text-4xl">{b.icon}</div>

              {/* H3 – correct */}
              <h3 className="font-semibold text-lg md:text-xl">
                {b.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
