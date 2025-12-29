"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/features/cart/cartSlice";

export default function PaymentStatusPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
    router.replace("/thank-you");
  }, []);

  return (
    <p className="text-center py-20 text-lg">
      Payment successful. Redirecting...
    </p>
  );
}
