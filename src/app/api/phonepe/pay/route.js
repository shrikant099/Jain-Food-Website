import { NextResponse } from "next/server";

let cachedToken = null;
let tokenExpiry = 0;

async function getPhonePeToken() {
    const now = Date.now();

    if (cachedToken && now < tokenExpiry) {
        return cachedToken;
    }

    const res = await fetch(
        "https://api.phonepe.com/apis/identity-manager/v1/oauth/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: process.env.PHONEPE_CLIENT_ID,
                client_secret: process.env.PHONEPE_CLIENT_SECRET,
                client_version: process.env.PHONEPE_CLIENT_VERSION,
            }),
        }
    );

    const data = await res.json();

    cachedToken = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000;

    return cachedToken;
}

export async function POST(req) {
    try {
        const { amount, mobile, orderId } = await req.json();

        const accessToken = await getPhonePeToken();

        const payload = {
            merchantTransactionId: orderId,
            amount: amount * 100,
            merchantUserId: mobile,
            redirectUrl: process.env.PHONEPE_REDIRECT_URL,
            redirectMode: "GET", // 🔥 IMPORTANT
            callbackUrl: process.env.PHONEPE_CALLBACK_URL,
            paymentInstrument: {
                type: "PAY_PAGE",
            },
        };

        const res = await fetch(
            "https://api.phonepe.com/apis/pg/checkout/v2/pay",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("PhonePe Pay Error:", err);
        return NextResponse.json(
            { success: false, error: "PhonePe V2 payment failed" },
            { status: 500 }
        );
    }
}
