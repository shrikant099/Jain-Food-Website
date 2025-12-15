import { NextResponse } from "next/server";

export function middleware(request) {
    const isAdmin = request.cookies.get("admin");

    // if (!isAdmin) {
    //     return NextResponse.redirect(new URL("/", request.url))
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
