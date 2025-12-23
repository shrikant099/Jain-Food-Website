// lib/phonepeToken.js

let cachedToken = null;
let tokenExpiry = 0;

export async function getPhonePeToken() {
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

  if (!data.encrypted_access_token || !data.expires_at) {
    throw new Error("Invalid PhonePe token response");
  }

  // ✅ VERY IMPORTANT
  cachedToken = data.encrypted_access_token;

  // epoch ms – 1 min buffer
  tokenExpiry = data.expires_at - 60_000;

  return cachedToken;
}
