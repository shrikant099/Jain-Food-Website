// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { amount, mobile, orderId } = await req.json();

//     // 1️⃣ GET TOKEN
//     const tokenRes = await fetch(
//       `http://localhost:3000/api/phonepe/token`,
//       { method: "POST" }
//     );

//     const tokenText = await tokenRes.text();
//     if (!tokenText) {
//       throw new Error("Empty token response");
//     }

//     const tokenData = JSON.parse(tokenText);
//     const encryptedToken = tokenData.encrypted_access_token;

//     if (!encryptedToken) {
//       throw new Error("encrypted_access_token missing");
//     }

//     // 2️⃣ PAYLOAD
//     const payload = {
//       merchantOrderId: orderId,
//       amount: amount * 100,
//       paymentFlow: {
//         type: "PG_CHECKOUT",
//         merchantUrls: {
//           redirectUrl: "https://agarwalrabdiwala.in/payment-status",
//         },
//       },
//     };
//     console.log(encryptedToken)

//     // 3️⃣ PHONEPE PAY CALL
//     const res = await fetch(
//       "https://api.phonepe.com/apis/pg/checkout/v2/pay",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `O-Bearer ${encryptedToken}`, // ✅ FIXED
//         },
//         body: JSON.stringify(payload),
//       }
//     );

//     console.log(`Response: ${res}`)
//     const raw = await res.text();
//     console.log("PHONEPE RAW:", raw);

//     if (!raw) {
//       return NextResponse.json(
//         { success: false, message: "Empty response from PhonePe" },
//         { status: res.status }
//       );
//     }

//     const data = JSON.parse(raw);
//     return NextResponse.json(data);

//   } catch (err) {
//     console.error("PhonePe Pay Error:", err);
//     return NextResponse.json(
//       { success: false, message: err.message },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount, orderId } = await req.json();

    /* =========================
       1️⃣ PHONEPE TOKEN (DIRECT)
       ========================= */
    const tokenRes = await fetch(
      "https://api.phonepe.com/apis/identity-manager/v1/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.PHONEPE_CLIENT_ID,
          client_secret: process.env.PHONEPE_CLIENT_SECRET,
          client_version: "1",
          grant_type: "client_credentials",
        }),
      }
    );

    const tokenText = await tokenRes.text();
    if (!tokenText) throw new Error("Empty token response");

    const tokenData = JSON.parse(tokenText);
    const encryptedToken = tokenData.encrypted_access_token;

    if (!encryptedToken) {
      throw new Error("encrypted_access_token missing");
    }

    /* =========================
       2️⃣ PAYMENT PAYLOAD
       ========================= */
    const payload = {
      merchantOrderId: orderId,
      amount: amount * 100, // paise
      paymentFlow: {
        type: "PG_CHECKOUT",
        merchantUrls: {
          redirectUrl: "https://agarwalrabdiwala.in/payment-status",
        },
      },
    };

    /* =========================
       3️⃣ PHONEPE PAY API
       ========================= */
    const payRes = await fetch(
      "https://api.phonepe.com/apis/pg/checkout/v2/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `O-Bearer ${encryptedToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const raw = await payRes.text();
    if (!raw) {
      return NextResponse.json(
        { success: false, message: "Empty PhonePe pay response" },
        { status: payRes.status }
      );
    }

    const data = JSON.parse(raw);

    return NextResponse.json({
      success: true,
      redirectUrl: data?.redirectUrl,
      phonepe: data,
    });
  } catch (err) {
    console.error("PhonePe Pay Error:", err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
