import Quotes from '@/lib/quotes/queotes';
import { NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json(await Quotes.get());
};

export const PUT = async (req: Request) => {
  return NextResponse.json(await Quotes.put(req));
};
