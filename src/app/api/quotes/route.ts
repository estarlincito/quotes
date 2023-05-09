import Quotes from '@/lib/queotes';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(await Quotes.get());
}

export async function PUT(req: Request) {
  return NextResponse.json(await Quotes.put(req));
}
