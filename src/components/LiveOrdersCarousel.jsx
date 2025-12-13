"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Train, IndianRupee } from "lucide-react";

const orders = [
  {
    text: "Rohit Choudhary Ordered Food in train at Abu road station in Suryanagari Express for ₹540",
  },
  {
    text: "Amit Khandelwal Ordered Food in train at Abu road station in Ashram Express for ₹325",
  },
  {
    text: "Neha Bhatia Ordered Food in train at Abu road station in Aravali Express for ₹699",
  },
  {
    text: "Saurabh Meena Ordered Food in train at Abu road station in Ranakpur Express for ₹410",
  },
  {
    text: "Farhan Pathan Ordered Food in train at Abu road station in Gujarat Mail for ₹585",
  },
  {
    text: "Harshil Desai Ordered Food in train at Abu road station in Jodhpur–Bandra Express for ₹760",
  },
  {
    text: "Tanya Verma Ordered Food in train at Abu road station in Ahmedabad–Delhi Sarai Rohilla Express for ₹355",
  },
  {
    text: "Gopal Singh Ordered Food in train at Abu road station in Bhagat Ki Koti Express for ₹482",
  },
  {
    text: "Jayesh Vora Ordered Food in train at Abu road station in Okha Express for ₹620",
  },
  {
    text: "Deepak Suthar Ordered Food in train at Abu road station in Jaipur–Bandra Terminus Express for ₹445",
  },
  {
    text: "Mohit Rathod Ordered Food in train at Abu road station in Jaisalmer Express for ₹530",
  },
  {
    text: "Sameer Shaikh Ordered Food in train at Abu road station in Marusagar Express for ₹799",
  },
  {
    text: "Yuvraj Solanki Ordered Food in train at Abu road station in Garib Rath Express for ₹368",
  },
  {
    text: "Rakesh Parmar Ordered Food in train at Abu road station in Bandra–Hisar Express for ₹512",
  },
  {
    text: "Kavita Sharma Ordered Food in train at Abu road station in Bhavnagar Express for ₹289",
  },
];

export default function LiveOrdersCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % orders.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
        <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Live Food Orders
        </span>{" "}
        at Abu Road
      </h2>

      <div className="max-w-2xl mx-auto h-[120px] px-5 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full flex items-center bg-gradient-to-r from-orange-50 to-red-50 
                       border border-orange-200 shadow-md rounded-2xl px-5 py-4 gap-4"
          >
            {/* ICON */}
            <div className="bg-white shadow-md p-3 rounded-full border border-orange-300">
              <Train className="w-6 h-6 text-orange-600" />
            </div>

            {/* TEXT */}
            <p className="text-gray-700 text-sm md:text-base font-medium leading-snug">
              {orders[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
