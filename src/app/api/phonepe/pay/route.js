import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { amount, mobile, orderId } = await req.json();

    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID,
      merchantTransactionId: orderId,
      merchantUserId: mobile,
      amount: amount * 100,
      redirectUrl: process.env.PHONEPE_REDIRECT_URL,
      redirectMode: "GET",
      callbackUrl: process.env.PHONEPE_CALLBACK_URL,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const base64Payload = Buffer.from(
      JSON.stringify(payload)
    ).toString("base64");

    // 🔴 IMPORTANT: path MUST match API
    const apiPath = "/pg/checkout/v2/pay";

    const stringToSign =
      base64Payload + apiPath + process.env.PHONEPE_SALT_KEY;

    const checksum =
      crypto
        .createHash("sha256")
        .update(stringToSign)
        .digest("hex") +
      "###" +
      process.env.PHONEPE_SALT_INDEX;

    const phonepeRes = await fetch(
      "https://api.phonepe.com/apis" + apiPath,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
        body: JSON.stringify({ request: base64Payload }),
      }
    );

    const data = await phonepeRes.json();
    return NextResponse.json(data);

  } catch (err) {
    console.error("PhonePe Error:", err);
    return NextResponse.json(
      { success: false, message: "Payment failed" },
      { status: 500 }
    );
  }
}
