import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });
  const { data, error } = await supabaseMiddleware.auth.getUser();
  if (error && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
