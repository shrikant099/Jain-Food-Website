"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full bg-black text-white py-24 md:py-32 flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Privacy & Policy
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[4px] bg-orange-500 rounded-full mx-auto mt-3"
          />

          <p className="mt-6 text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. Read how we collect, use and protect your data.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="w-full flex justify-center bg-white py-16 md:py-24">
        <div className="w-full max-w-[1350px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 space-y-10 text-gray-800 leading-relaxed">

          {/* BLOCK 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-orange-600">Privacy Policy</h2>

            <p>
              This Privacy Policy describes how Aagarwal Rabdiwala, a Proprietorship Firm,
              having its principal place of business at Shop No. 16, Railway Taxi Parking, Welcome Home,
              Namaste, Abu Road, Rajasthan – 307026 (hereinafter referred to as “we”, “our”, “us”) collects,
              uses, stores, shares, protects and otherwise processes your personal information through our website
              https://agarwalrabdiwala.in/ (hereinafter referred to as the “Platform”). By accessing or using the
              Platform, you agree to the collection and use of information in accordance with this Privacy Policy.
              This Platform is intended for users located in India and all personal data is stored and processed in India.
            </p>

            <p className="font-semibold text-gray-900">
              By visiting this Platform, providing your information, or placing any order through the Platform, you expressly
              agree to be bound by the terms of this Privacy Policy, our Terms & Conditions and our Return & Refund Policy,
              and agree to be governed by the laws of India. If you do not agree with this Privacy Policy, please do not use
              or access our Platform.
            </p>
          </motion.div>

          {/* BLOCK 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-600">Information We Collect</h2>

            <p>
              We may collect personal information such as your name, mobile number, email address, delivery address,
              location details, order details and any other information necessary to provide our services. We collect
              such information when you place an order, contact us, register on our Platform, or otherwise interact with us.
              We do not collect any unnecessary sensitive personal data such as biometric or facial recognition information.
            </p>

            <p>
              Payment-related details such as debit card, credit card, UPI or net banking information are processed securely
              by third-party payment gateways, and we do not store any such financial information on our servers.
            </p>

            <p>
              We may collect certain non-personal information automatically such as your IP address, device type,
              browser type and browsing behaviour through cookies and similar technologies to improve user experience,
              security and website performance. You may control cookies through your browser settings.
            </p>
          </motion.div>

          {/* BLOCK 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-600">How We Use Your Information</h2>

            <p>
              We use your personal information solely for purposes such as processing your food orders, managing deliveries,
              customer support, internal records, improving our services, resolving disputes, preventing fraud, complying with
              legal obligations and for communication related to your orders or services. We do not sell or rent your personal
              information to any third party.
            </p>
          </motion.div>

          {/* BLOCK 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-600">Sharing of Your Information</h2>

            <p>
              We may share your personal information with trusted third parties such as delivery partners,
              payment gateway service providers and technical service providers strictly for the purpose of fulfilling
              your orders and providing our services. Such third parties are required to follow appropriate data protection
              practices. We may also disclose your information if required by law, court order, government authority or
              law enforcement agencies.
            </p>
          </motion.div>

          {/* BLOCK 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-600">Data Security</h2>

            <p>
              We take reasonable security measures to protect your personal information from unauthorised access,
              misuse, loss or disclosure. However, no method of transmission over the internet is completely secure
              and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of
              your account details and access credentials.
            </p>
          </motion.div>

          {/* BLOCK 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-600">Your Rights</h2>

            <p>
              You may request access to, correction of or deletion of your personal information by contacting us through the
              contact details provided on our website. We may retain certain information as required by law or for legitimate
              business purposes including fraud prevention and dispute resolution.
            </p>

            <p>
              You may withdraw your consent for the processing of your personal data by writing to us. However, withdrawal of
              consent may affect your ability to use certain services on the Platform.
            </p>
          </motion.div>

          {/* BLOCK 7 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-600">Policy Updates</h2>

            <p>
              We reserve the right to update or modify this Privacy Policy at any time without prior notice.
              Any changes shall be effective immediately upon being published on the Platform.
              It is your responsibility to review this Privacy Policy periodically.
            </p>
          </motion.div>

          {/* BLOCK 8 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-600">Contact Us</h2>

            <p>
              If you have any questions, concerns or complaints regarding this Privacy Policy or the handling of your
              personal data, you may contact us through the contact details available on our website.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}
