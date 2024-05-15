import { NextResponse } from "next/server";
import { supabase } from "@/config/supabase";

export async function middleware(request) {
  const { error } = await supabase.auth.getSession();
  if (error && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
