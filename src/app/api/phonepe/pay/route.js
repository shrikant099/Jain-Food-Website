import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { amount, mobile, orderId } = await req.json();

        if (!amount || !mobile || !orderId) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        const payload = {
            merchantId: process.env.PHONEPE_MERCHANT_ID,
            merchantTransactionId: orderId, // unique
            merchantUserId: mobile,
            amount: Number(amount) * 100, // paise
            redirectUrl: process.env.PHONEPE_REDIRECT_URL,
            redirectMode: "GET", // 🔥 MUST BE GET
            callbackUrl: process.env.PHONEPE_CALLBACK_URL,
            paymentInstrument: {
                type: "PAY_PAGE",
            },
        };

        const base64Payload = Buffer.from(
            JSON.stringify(payload)
        ).toString("base64");

        const checksum = crypto
            .createHash("sha256")
            .update(base64Payload + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY)
            .digest("hex");

        const xVerify =
            checksum + "###" + process.env.PHONEPE_SALT_INDEX;

        const response = await fetch(
            "https://api.phonepe.com/apis/hermes/pg/v1/pay",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-VERIFY": xVerify,
                },
                body: JSON.stringify({
                    request: base64Payload,
                }),
            }
        );

        const data = await response.json();

        // 🔍 DEBUG (important)
        console.log("PHONEPE RESPONSE:", data);

        if (
            !data?.data?.instrumentResponse?.redirectInfo?.url
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "PhonePe redirect missing",
                    phonepe: data,
                },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            data: data.data,
        });

    } catch (err) {
        console.error("PHONEPE ERROR:", err);
        return NextResponse.json(
            { success: false, message: "PhonePe server error" },
            { status: 500 }
        );
    }
}
