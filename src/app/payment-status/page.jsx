"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/features/cart/cartSlice";

export default function PaymentStatusPage() {
  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = params.get("code");

    if (code === "PAYMENT_SUCCESS") {
      // 🔐 get pending order
      const pendingOrder = sessionStorage.getItem(
        "pendingPhonePeOrder"
      );

      if (pendingOrder) {
        // ✅ final order save
        sessionStorage.setItem("orderData", pendingOrder);
        sessionStorage.removeItem("pendingPhonePeOrder");
      }

      // ✅ clear cart
      dispatch(clearCart());

      // ✅ redirect
      router.replace("/thank-you");
    } else {
      // ❌ payment failed
      sessionStorage.removeItem("pendingPhonePeOrder");
      router.replace("/checkout");
    }
  }, []);

  return (
    <p className="text-center py-20 text-lg">
      Checking payment status...
    </p>
  );
}
