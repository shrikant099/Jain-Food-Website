import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount, mobile, orderId } = await req.json();

    // 1️⃣ Get fresh token
    const tokenRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/token`,
      { method: "POST" }
    );
    const tokenData = await tokenRes.json();

    // 🔥 IMPORTANT CHANGE HERE
    const encryptedToken = tokenData.encrypted_access_token;

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
          "Content-Type": "application/json",
          // 🔥 THIS IS THE KEY FIX
          Authorization: `O-Bearer ${encryptedToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    return NextResponse.json(data);

  } catch (err) {
    console.error("PhonePe Pay Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
