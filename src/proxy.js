import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function proxy(request) {
  const token = await getToken({ req: request });
  console.log(token, request)

  if (!token) {
    const loginUrl = new URL('/login', request.url);

    // 🔥 original URL save করো
    loginUrl.searchParams.set('callbackUrl', request.url);

    return NextResponse.redirect(loginUrl);
  }

   return NextResponse.next(); // ✅ এটা দিতেও হবে
}

export const config = {
  matcher: '/about/:path*',
};