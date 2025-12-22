import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount, mobile, orderId } = await req.json();

    console.log("▶️ PhonePe Pay API HIT");
    console.log("Amount:", amount);
    console.log("Mobile:", mobile);
    console.log("OrderId:", orderId);

    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID,
      merchantTransactionId: orderId,
      merchantUserId: mobile,
      amount: Number(amount) * 100, // paise
      redirectUrl: process.env.PHONEPE_REDIRECT_URL,
      redirectMode: "POST",
      callbackUrl: process.env.PHONEPE_CALLBACK_URL,
      paymentInstrument: {
        type: "PAY_PAGE", // 🔴 main suspect
      },
    };

    console.log("📦 Payload:", payload);

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");

    const stringToSign =
      base64Payload + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY;

    const checksum = crypto
      .createHash("sha256")
      .update(stringToSign)
      .digest("hex");

    const xVerify = checksum + "###" + process.env.PHONEPE_SALT_INDEX;

    console.log("🔐 X-VERIFY:", xVerify);

    const response = await fetch(
      `${process.env.PHONEPE_BASE_URL}/pg/v1/pay`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerify,
        },
        body: JSON.stringify({ request: base64Payload }),
      }
    );

    const data = await response.json();

    // 🔥 MOST IMPORTANT LOG
    console.log("🔥 PHONEPE RAW RESPONSE ↓↓↓");
    console.log(JSON.stringify(data, null, 2));

    // ---------- STRICT CHECK ----------
    const redirectUrl =
      data?.data?.instrumentResponse?.redirectInfo?.url;

    if (!redirectUrl) {
      console.error("❌ REDIRECT URL MISSING");
      return NextResponse.json(
        {
          success: false,
          message: "PhonePe redirect missing",
          phonepeResponse: data,
        },
        { status: 400 }
      );
    }

    console.log("✅ REDIRECT URL FOUND:", redirectUrl);

    // 🔥 FINAL SUCCESS
    return NextResponse.redirect(redirectUrl);

  } catch (err) {
    console.error("❌ PhonePe Pay Error:", err);
    return NextResponse.json(
      { error: "PhonePe payment error", details: String(err) },
      { status: 500 }
    );
  }
}
