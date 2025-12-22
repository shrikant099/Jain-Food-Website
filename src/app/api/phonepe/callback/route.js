import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const rawBody = await req.text();
        const body = JSON.parse(rawBody);

        const checksumReceived = body.checksum;
        const payload = JSON.stringify(body.response);

        const checksumCalculated = crypto
            .createHash("sha256")
            .update(payload + process.env.PHONEPE_SALT_KEY)
            .digest("hex");

        if (checksumReceived !== checksumCalculated) {
            return NextResponse.json({ success: false }, { status: 400 });
        }

        const paymentData = body.response;

        if (paymentData.code === "PAYMENT_SUCCESS") {
            const orderId = paymentData.merchantTransactionId;

            console.log("✅ PAYMENT SUCCESS:", orderId);

            // 🔥 YAHAN FUTURE ME:
            // - DB me order mark PAID
            // - WhatsApp send
            // - Invoice generate

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ success: false });

    } catch (err) {
        console.error("Callback error:", err);
        return NextResponse.json(
            { error: "Callback error" },
            { status: 500 }
        );
    }
}
