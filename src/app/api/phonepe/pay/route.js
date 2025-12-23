import { NextResponse } from "next/server";
import { getPhonePeToken } from "@/lib/phonepeToken";

export async function POST(req) {
  try {
    const { amount, mobile, orderId } = await req.json();

    const accessToken = await getPhonePeToken();

    const payload = {
      merchantTransactionId: orderId,
      amount: amount * 100,
      merchantUserId: mobile,
      redirectUrl: process.env.PHONEPE_REDIRECT_URL,
      redirectMode: "GET",
      callbackUrl: process.env.PHONEPE_CALLBACK_URL,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const res = await fetch(
      "https://api.phonepe.com/apis/pg/checkout/v2/pay",
      {
        method: "POST",
        headers: {
          Authorization: `O-Bearer ${accessToken}`, // 🔥 FIX
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("PhonePe Pay Error:", err);
    return NextResponse.json(
      { success: false, error: "PhonePe V2 payment failed" },
      { status: 500 }
    );
  }
}
