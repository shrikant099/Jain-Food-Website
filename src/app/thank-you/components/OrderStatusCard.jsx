"use client";

import { Phone } from "lucide-react";

export default function OrderStatusCard({
  statusText = "Order Arrived",
  timeText = "Delivery confirmed at time call us more information.",
  phone = "+918107139044",
}) {
  return (
    <div className="bg-white  rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

      {/* LEFT SIDE */}
      <div className="flex items-start gap-3">
        {/* GREEN DOT */}
        <span className="mt-1 w-4 h-4 rounded-full bg-green-500"></span>

        <div>
          <h3 className="font-semibold text-gray-900">{statusText}</h3>
          <p className="text-sm text-gray-500 mt-1">{timeText}</p>
        </div>
      </div>

      {/* RIGHT SIDE - CALL BUTTON */}
      <a
        href={`tel:${phone}`}
        className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 transition"
      >
        <Phone size={18} />
        CALL US
      </a>
    </div>
  );
}
