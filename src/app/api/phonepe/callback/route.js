export async function POST(req) {
    const body = await req.json();
    console.log("PhonePe Callback:", body);
    return NextResponse.json({ success: true });
  }
  