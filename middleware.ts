import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware function
export function middleware(req: NextRequest) {
  const invitationCookie = req.cookies.get("invitation_validated")?.value;
  const token = req.cookies.get("auth_token")?.value; // JWT or session token
  const userRole = req.cookies.get("role")?.value; // "admin" or "user"

  const { pathname } = req.nextUrl;

  // 1️⃣ Invitation-protected pages
  if (pathname.startsWith("/register/form")) {
    if (!invitationCookie) {
      return NextResponse.redirect(new URL("/register", req.url));
    }
  }

  // 2️⃣ Dashboard-protected pages
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // 2a️⃣ Admin dashboard check
    if (pathname.startsWith("/dashboard/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/dashboard/user", req.url));
    }

    // 2b️⃣ Regular user dashboard check
    if (pathname.startsWith("/dashboard/user") && userRole !== "user") {
      return NextResponse.redirect(new URL("/dashboard/admin", req.url));
    }
  }

  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: [
    "/register/form/:path*", // Invitation form
    "/dashboard/:path*", // All dashboard routes
  ],
};
