import { sendWhatsApp } from "@/lib/sendWhatsApp";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const order = await req.json();
        console.log("Order:", JSON.stringify(order, null, 2));

        const result = await sendWhatsApp(order);
        console.log("Zoepact Result:", result);

        if (result?.error) {
            return NextResponse.json(
                { success: false, error: result.error },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "WhatsApp message sent successfully",
                result,
            },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}
