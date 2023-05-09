import { NextRequest, NextResponse } from 'next/server';
import verifyToken from './lib/auth/token/verify';

export async function middleware(req: NextRequest) {
  const url = req.url;
  const token = req.cookies.get('user-token')?.value;
  const verifiedToken = token && (await verifyToken(token));
  const loginUrl = '/auth/login';

  if (!url.includes(loginUrl) && !verifiedToken) {
    return NextResponse.redirect(new URL(loginUrl, url));
  }

  if (url.includes(loginUrl) && verifiedToken) {
    return NextResponse.redirect(new URL('/quotes/new', url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/quotes',
    '/quotes/new',
    '/quotes/update',
    '/auth/login',
    '/auth/logout',
  ],
};
