import { NextRequest, NextResponse } from 'next/server';
import verifyToken from './lib/auth/token/verify';

export const middleware = async (req: NextRequest) => {
  const url = req.url;
  const loginUrl = '/auth/login';

  const token = req.cookies.get('user-token')?.value;

  const verifiedToken = await verifyToken(token!);

  //redirect to login page
  if (!url.includes(loginUrl) && !verifiedToken) {
    return NextResponse.redirect(new URL(loginUrl, url));
  }

  //redirect to quotes/new page
  if (url.includes(loginUrl) && verifiedToken) {
    return NextResponse.redirect(new URL('/quotes/new', url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/api/quotes',
    '/quotes/new',
    '/quotes/update',
    '/auth/login',
    '/auth/logout',
  ],
};
