import { NextRequest, NextResponse } from 'next/server';
import verifyToken from './lib/auth/token/verify';

class Path {
  static readonly api = { quote: '/api/quotes' };
  static readonly quote = { new: '/quotes/new', update: '/quotes/new' };
  static readonly auth = { all: '/auth:path*', login: '/auth/login' };
}

const { api, auth, quote } = Path;

export async function middleware(req: NextRequest) {
  const url = req.url;
  const token = req.cookies.get('user-token')?.value;
  const verifiedToken = token && (await verifyToken(token));

  if (!url.includes(auth.login) && !verifiedToken) {
    return NextResponse.redirect(new URL(auth.login, url));
  }

  if (url.includes(auth.login) && verifiedToken) {
    return NextResponse.redirect(new URL(quote.new, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [api.quote, quote.new, quote.update, auth.all],
};
