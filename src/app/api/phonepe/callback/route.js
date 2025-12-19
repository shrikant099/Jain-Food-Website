import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
    if (process.env.PHONEPE_TEST_MODE === "true") {
        console.log("🧪 MOCK CALLBACK RECEIVED");
        return NextResponse.json({ success: true });
    }
    try {
        const rawBody = await req.text();
        const body = JSON.parse(rawBody);

        const checksumReceived = body.checksum;
        const payload = JSON.stringify(body.response);

        const checksumCalculated = crypto
            .createHash("sha256")
            .update(payload + process.env.PHONEPE_SALT_KEY)
            .digest("hex");

        if (checksumReceived === checksumCalculated) {
            // Payment Verified 
            return NextResponse.json({ message: "Payment verify succesfull", success: true }, { status: 200 })
        }
        return NextResponse.json({ success: false, message: "Payment not verifyied failed !!" }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ error: `Errror request callback: ${error}` || "Something Went Wrong" }, { status: 500 })
    }
}