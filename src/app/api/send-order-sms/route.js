import { sendOrderSMS } from "@/lib/twilio";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const { orderId, total, phone } = body;

        if (!orderId || !total || !phone) {
            return NextResponse.json(
                { success: false, message: "Missing fields" },
                { status: 400 }
            );
        }

        await sendOrderSMS({ orderId, total, phone });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("SMS Error:", error);
        return NextResponse.json(
            { success: false, message: "SMS failed" },
            { status: 500 }
        );
    }
}
