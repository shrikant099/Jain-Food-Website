"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function OrderFloatingButton() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const order = sessionStorage.getItem("orderData");
    setShow(!!order);

    // storage change detect (extra safe)
    const handleStorage = () => {
      setShow(!!sessionStorage.getItem("orderData"));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => router.push("/thank-you")}
      className="
        fixed bottom-5 cursor-pointer right-5 z-50
        flex items-center gap-2
        bg-blue-600 text-white
        px-5 py-3 rounded-full
        shadow-lg
        hover:bg-blue-700
        active:scale-95
        transition-all
        text-sm md:text-base
      "
    >
      <CheckCircle size={20} />
      View Order
    </button>
  );
}
