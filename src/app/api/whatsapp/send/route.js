import { sendCustomerWhatsApp } from "@/lib/sendCustomerWhatsapp";
import { sendWhatsApp } from "@/lib/sendWhatsApp";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const order = await req.json();

        const [adminResult, customerResult] = await Promise.all([
            sendWhatsApp(order),
            sendCustomerWhatsApp(order),
        ]);

        // Check errror
        if (adminResult?.error || customerResult?.error) {
            return NextResponse.json(
                {
                    success: false,
                    adminError: adminResult?.error,
                    customerError: customerResult?.error,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Both WhatsApp messages sent successfully",
                adminResult,
                customerResult,
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
