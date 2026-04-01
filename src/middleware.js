import { NextResponse } from 'next/server';

const rateLimit = new Map();

export function middleware(request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 60; // 60 requests per minute per IP

  const userRequests = rateLimit.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*', // Sirf API routes pe lagao
};