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
    const merchantOrderId = params.get("merchantOrderId");

    if (!merchantOrderId) {
      router.replace("/checkout");
      return;
    }

    // 🔥 VERIFY PAYMENT FROM BACKEND
    fetch(`/api/phonepe/status?orderId=${merchantOrderId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.state === "COMPLETED") {
          dispatch(clearCart());
          router.replace("/thank-you");
        } else {
          router.replace("/checkout");
        }
      })
      .catch(() => {
        router.replace("/checkout");
      });
  }, []);

  return (
    <p className="text-center py-20 text-lg">
      Verifying payment, please wait...
    </p>
  );
}
