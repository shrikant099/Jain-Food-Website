"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      {/* =============================== */}
      {/*     PREMIUM HERO SECTION        */}
      {/* =============================== */}
      <section className="relative w-full bg-black text-white py-28 md:py-36 flex justify-center overflow-hidden">

        {/* Dark layered gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

        {/* Orange glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-orange-500/25 blur-[150px] rounded-full opacity-80"></div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-xl">
            Return & Refund Policy
          </h1>

          {/* underline animation */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-[4px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-4 shadow-lg"
          />

          <p className="mt-6 text-lg md:text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Please review our refund and cancellation process before placing an order.
          </p>
        </motion.div>
      </section>

      {/* =============================== */}
      {/*      CONTENT MAIN WRAPPER       */}
      {/* =============================== */}
      <section className="w-full flex justify-center bg-white py-20 md:py-28">
        <div className="w-full max-w-[100%] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">

          {/* CONTENT CARD */}
          <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-6 sm:p-10 md:p-12 space-y-12 border border-orange-100">

            {/* INTRO PARAGRAPHS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p>
                This Return & Refund Policy (“Policy”) applies to all purchases made through the website
                https://agarwalrabdiwala.in/ (hereinafter referred to as the “Platform”), operated by Aagarwal Rabdiwala
                (“we”, “our”, “us”).
              </p>

              <p>
                By placing an order on our Platform, you agree to be bound by the terms of this Return & Refund Policy along
                with our Terms & Conditions and Privacy Policy.
              </p>
            </motion.div>

            {/* SECTION GENERATOR */}
            {[
              {
                title: "1. Nature of Products",
                points: [
                  "We deal in freshly prepared food items and restaurant products.",
                  "Due to the perishable nature of food, returns are not accepted once the order is successfully delivered."
                ],
              },
              {
                title: "2. Cancellation Policy",
                sub: "A. Order Cancellation by Customer",
                points: [
                  "Orders can be cancelled only before the order is prepared or dispatched.",
                  "Once the food preparation has started or the order is out for delivery, cancellation will not be allowed.",
                  "Refunds for eligible cancellations will be processed as per the refund section of this Policy."
                ],
                sub2: "B. Order Cancellation by Us",
                points2: [
                  "Non-availability of ordered items",
                  "Operational issues",
                  "Payment failures",
                  "Unforeseen circumstances such as technical errors or force majeure events",
                ],
                extra: "In such cases, the full amount paid by the customer shall be refunded."
              },
              {
                title: "3. Return Policy",
                points: [
                  "Since we sell consumable food products, returns are not applicable once the order is delivered.",
                  "However, refund or replacement may be considered in the following cases:"
                ],
                subPoints: [
                  "Wrong item delivered",
                  "Missing items",
                  "Food quality issues",
                  "Spillage during transit",
                  "Completely damaged packaging making the food inedible",
                ],
                extra: "The customer must report such issues within 2 hours of delivery along with photo or video proof."
              },
              {
                title: "4. Refund Policy",
                sub: "A. Eligible Refund Cases",
                points: [
                  "Order cancelled before preparation",
                  "Order cancelled by us",
                  "Payment deducted but order not confirmed",
                  "Valid quality issue verified by our team",
                ],
                sub2: "B. Non-Refundable Cases",
                points2: [
                  "Incorrect address or contact details provided by the customer",
                  "Failed delivery due to customer unavailability",
                  "Change of mind after food preparation",
                  "Partial consumption of food",
                  "Delay caused by traffic, weather, or third-party delivery partners",
                ]
              },
              {
                title: "5. Refund Processing Time",
                points: [
                  "All approved refunds shall be processed to the original payment method only.",
                  "Refunds are generally initiated within 5–7 business days after approval.",
                  "We are not responsible for delays caused by banks or payment gateway partners."
                ]
              },
              {
                title: "6. Mode of Refund",
                points: [
                  "Refunds will be issued through the same mode of payment used while placing the order:",
                  "UPI",
                  "Debit Card",
                  "Credit Card",
                  "Net Banking",
                  "Wallets (if applicable)",
                  "Cash refunds are not supported."
                ]
              },
              {
                title: "7. Role of Payment Gateway",
                points: [
                  "We use secure third-party payment gateways for processing online payments.",
                  "We do not store any card, UPI, or banking details on our servers.",
                  "All payment-related data is handled directly by the payment gateway providers."
                ]
              },
              {
                title: "8. Dispute Resolution",
                points: [
                  "If you have any issues related to refund or cancellation, you can contact our support team with the following details:",
                  "Order ID",
                  "Registered mobile number",
                  "Date and time of order",
                  "Nature of complaint with proof",
                ]
              },
              {
                title: "9. Changes to This Policy",
                points: [
                  "We reserve the right to modify, update, or change this Return & Refund Policy at any time without prior notice.",
                  "It is your responsibility to review this Policy periodically."
                ]
              },
              {
                title: "10. Governing Law & Jurisdiction",
                points: [
                  "This Policy shall be governed by and construed in accordance with the laws of India.",
                  "All disputes shall be subject to the exclusive jurisdiction of the courts of Abu Road, Rajasthan."
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-orange-600">{section.title}</h3>

                {/* Normal points */}
                {section.points && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                )}

                {/* Sub-heading 1 */}
                {section.sub && (
                  <h4 className="font-semibold text-gray-900 mt-4">{section.sub}</h4>
                )}

                {section.points && section.sub && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                )}

                {/* If section 2 has extra list */}
                {section.points2 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mt-4">{section.sub2}</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {section.points2.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </>
                )}

                {/* Subpoints under a parent bullet */}
                {section.subPoints && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.subPoints.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                )}

                {/* Extra note */}
                {section.extra && <p className="font-medium text-gray-800">{section.extra}</p>}
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
