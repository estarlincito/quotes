import { NextRequest, NextResponse } from 'next/server';
import verifyToken from './lib/auth/token/verify';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('user-token')?.value;

  const url = req.url;

  const verifiedToken = token && (await verifyToken(token));

  console.log(verifiedToken);

  if (req.nextUrl.pathname.startsWith('/api') && !verifiedToken) {
    return;
  }

  if (url.includes('/login') && verifiedToken) {
    return NextResponse.redirect(new URL('/api/quotes', url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/login', url));
  }
}

export const config = {
  matcher: ['/api/quotes'],
};

// const session = '';
// if (!session) {
//   const requestedPage = req.nextUrl.pathname;
//   const url = req.nextUrl.clone();
//   url.pathname = '/auth/login';
//   // url.search = `p=${requestedPage}`;
//   return NextResponse.redirect(url);
// }
// return NextResponse.next();
