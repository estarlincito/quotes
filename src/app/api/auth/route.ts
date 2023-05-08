import auth from '@/lib/auth';

export async function POST(req: Request) {
  return await auth(req);
}

export async function GET() {
  return new Response('auth token');
}
