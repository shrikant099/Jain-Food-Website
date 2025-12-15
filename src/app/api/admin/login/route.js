import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { password } = await req.json();

        if (password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json(
                { success: false, message: "Wrong password" },
                { status: 400 }
            );
        }

        const res = NextResponse.json({ success: true, message: "Login Succesfull" }, { status: 200 });

        res.cookies.set("admin", "true", {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        return res;
    } catch (error) {
        return NextResponse.json({ error: `Error login: ${error}` }, { status: 500 })
    }
}
