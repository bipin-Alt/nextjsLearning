import { auth } from "@/auth/auth";

export const proxy = auth((req) => {
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;

    const isProtected = ["/dashboard", "/profile"].some((path) =>
        nextUrl.pathname.startsWith(path)
    );

    if (isProtected && !isLoggedIn) {
        return Response.redirect(new URL("/login", nextUrl));
    }
});

export default proxy;

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"]
};
