import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("user-auth")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!auth|api|_next/static|_next/image|favicon.ico).*)"],
};



