import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { amount, mobile, orderId } = await req.json();

        const payload = {
            merchantId: process.env.PHONEPE_MERCHANT_ID,
            merchantTransactionId: orderId, // SAME AS ORDER ID
            merchantUserId: mobile,
            amount: amount * 100, // paise
            redirectUrl: process.env.PHONEPE_REDIRECT_URL,
            redirectMode: "POST",
            callbackUrl: process.env.PHONEPE_CALLBACK_URL,
            paymentInstrument: {
                type: "PAY_PAGE",
            },
        };

        const base64Payload = Buffer
            .from(JSON.stringify(payload))
            .toString("base64");

        const checksum = crypto
            .createHash("sha256")
            .update(
                base64Payload + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY
            )
            .digest("hex");

        const xVerify = checksum + "###" + process.env.PHONEPE_SALT_INDEX;

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

        const redirectUrl =
            data?.data?.instrumentResponse?.redirectInfo?.url;

        if (!redirectUrl) {
            return NextResponse.json(
                { success: false, message: "PhonePe redirect missing" },
                { status: 400 }
            );
        }

        // 🔥 FINAL FIX — SERVER SIDE REDIRECT
        return NextResponse.redirect(redirectUrl);

    } catch (err) {
        console.error("PhonePe Pay Error:", err);
        return NextResponse.json(
            { error: "PhonePe payment error" },
            { status: 500 }
        );
    }
}
