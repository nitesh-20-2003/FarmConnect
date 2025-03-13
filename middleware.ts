import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);
const isAdminRoute = createRouteMatcher([`/admin(.*)`]);

export default clerkMiddleware(async (auth, req) => {
  const authObject = await auth();
  const isAuthenticated = !!authObject?.userId; // Ensures a valid user session

  // Admin route protection: Only allow authenticated users
  if (isAdminRoute(req) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // General route protection: Redirect unauthenticated users on non-public routes
  if (!isPublicRoute(req) && !isAuthenticated) {
    return authObject.redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
