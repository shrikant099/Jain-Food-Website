import { NextResponse } from "next/server";

export async function POST() {
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

  console.log(`Response Token: ${res}`)
  const data = await res.json();
  return NextResponse.json(data);
}
