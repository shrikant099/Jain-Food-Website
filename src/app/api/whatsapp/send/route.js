import { sendWhatsApp } from "@/lib/sendWhatsApp";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const order = await req.json();
        const result = await sendWhatsApp(order);
        // WhatsApp API error check
        if (result?.error) {
            return NextResponse.json(
                {
                    success: false,
                    error: result.error,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully on WhatsApp",
                result,
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}