import newQuote from '@/lib/quotes/new';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  return NextResponse.json(await newQuote(req));
};

export const GET = async (req: Request) => {
  return new Response("it's okay");
};
