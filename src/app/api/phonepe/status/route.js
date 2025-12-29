import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");

    const tokenRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/token`,
        { method: "POST" }
    );
    const tokenData = await tokenRes.json();

    const res = await fetch(
        `https://api.phonepe.com/apis/pg/checkout/v2/status/${orderId}`,
        {
            headers: {
                Authorization: `O-Bearer ${tokenData.encrypted_access_token}`,
            },
        }
    );

    const data = await res.json();

    return NextResponse.json({
        success: true,
        state: data.state, // COMPLETED | FAILED | PENDING
        data,
    });
}
