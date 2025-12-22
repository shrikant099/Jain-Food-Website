import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount, mobile, orderId } = await req.json();

    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID,
      merchantTransactionId: orderId, // unique & stable
      merchantUserId: mobile,
      amount: Number(amount) * 100, // paise
      redirectUrl: process.env.PHONEPE_REDIRECT_URL,
      redirectMode: "GET",
      callbackUrl: process.env.PHONEPE_CALLBACK_URL,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const base64Payload = Buffer
      .from(JSON.stringify(payload))
      .toString("base64");

    const stringToSign =
      base64Payload + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY;

    const checksum = crypto
      .createHash("sha256")
      .update(stringToSign)
      .digest("hex");

    const xVerify =
      checksum + "###" + process.env.PHONEPE_SALT_INDEX;

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

    if (!data?.data?.instrumentResponse?.redirectInfo?.url) {
      return NextResponse.json(
        { success: false, message: "PhonePe redirect missing" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("PhonePe Error:", err);
    return NextResponse.json(
      { success: false, message: "PhonePe payment error" },
      { status: 500 }
    );
  }
}
