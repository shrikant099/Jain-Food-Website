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
      dispatch(clearCart());
      router.replace("/thank-you");
    } else {
      router.replace("/checkout");
    }
  }, []);

  return (
    <p className="text-center py-20 text-lg">
      Verifying payment...
    </p>
  );
}
