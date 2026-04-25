import { auth as proxy } from "@/auth";
import { GetUserSession } from "./lib/Sessions/GetUserSession";
import { NextResponse } from "next/server";
// =============================================
const authRoutes = ["/login", "/register"];
const protectedRoutes = ["/cart", "/profile", "/order"];
export default proxy(async (req) => {
  const pathname = req.nextUrl.pathname;
  const userSession = await GetUserSession();
  if (authRoutes.includes(pathname) && userSession)
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  if (protectedRoutes.includes(pathname) && !userSession)
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
});
export const config = {
  mathcer: ["/login", "/register", "/cart", "/profile", "/order"],
};
