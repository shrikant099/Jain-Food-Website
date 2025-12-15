"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { EMAIL_TEMPLATE_ID_ENQUIRY, EMAIL_SERVICE_ID, PUBLIC_KEY } from "@/keys";

export default function EnquirySection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitEnquiry = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,     // 👈 YOUR SERVICE ID
        EMAIL_TEMPLATE_ID_ENQUIRY,    // 👈 YOUR TEMPLATE ID
        {
          name: form.name,
          phone: form.phone,
          message: form.message,
        },
        PUBLIC_KEY       // 👈 YOUR PUBLIC KEY
      );

      setStatus("success");
      setForm({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="enquiry-section"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Bulk Order Enquiry
          </h2>
          <p className="text-gray-600 mt-2">
            Planning food for groups or train passengers? We’re here to help.
          </p>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT → FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-orange-100 shadow-xl rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={submitEnquiry} className="space-y-5">

              <FormField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <FormField
                label="Mobile Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />

              <div>
                <label className="block font-semibold mb-1">
                  Requirement Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your bulk order requirement..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300
                  focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                disabled={status === "loading"}
                className={`w-full py-3 rounded-xl text-lg font-semibold shadow-md transition
                  ${status === "loading"
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700 text-white"
                  }`}
              >
                {status === "loading" ? "Sending Enquiry..." : "Submit Enquiry"}
              </motion.button>

              {/* STATUS MESSAGE */}
              {status === "success" && (
                <p className="text-green-600 text-sm font-medium">
                  ✅ Enquiry sent successfully. Our team will contact you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-sm font-medium">
                  ❌ Please fill all details or try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* RIGHT → CONTENT (RESTORED ✔) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Order bulk food on train at Abu Road
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Looking to place a bulk food order for train passengers or group travel?
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              At <span className="font-semibold">Agarwal Rabdiwala</span>, we prepare
              fresh vegetarian & Jain meals with hygienic packaging and reliable
              on-time delivery at
              <span className="font-semibold"> Abu Road Railway Station</span>.
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Share your requirement and our team will help you plan everything smoothly.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Highlight text="Freshly Cooked Meals" />
              <Highlight text="Jain & Vegetarian Options" />
              <Highlight text="Reliable Train Delivery" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* SMALL COMPONENTS */
function FormField({ label, name, value, onChange, type = "text" }) {
  const handleInput = (e) => {
    let val = e.target.value;

    // 🔒 Mobile number lock (10 digits only)
    if (name === "phone") {
      val = val.replace(/\D/g, "");   // sirf numbers
      if (val.length > 10) return;    // 10 se zyada allow nahi
    }

    onChange({
      target: {
        name,
        value: val,
      },
    });
  };

  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInput}
        inputMode={name === "phone" ? "numeric" : undefined}
        className="w-full px-4 py-3 rounded-xl border border-gray-300
        focus:ring-2 focus:ring-orange-500 outline-none"
      />
    </div>
  );
}


function Highlight({ text }) {
  return (
    <span className="px-4 py-2 bg-orange-50 text-orange-700
    font-medium text-sm rounded-full border border-orange-200">
      {text}
    </span>
  );
}
