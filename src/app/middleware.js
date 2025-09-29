import { NextResponse } from 'next/server';

export function middleware(request) {
  // Always redirect to /login (simulate failure)
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ["/:path*"],
};