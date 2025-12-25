import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount, mobile, orderId } = await req.json();

    // 🔹 ALWAYS get fresh token
    const tokenRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/token`,
      { method: "POST" }
    );

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

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
          Authorization: `Bearer ${accessToken}`, // 🔥 V2 AUTH
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    console.log(`Data: ${data}`)
    return NextResponse.json(data);

  } catch (err) {
    console.error("PhonePe Pay Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
