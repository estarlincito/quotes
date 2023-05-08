import auth from '@/lib/auth';

export async function POST(req: Request) {
  return new Response(JSON.stringify({ sucess: true }), { status: 200 });
  return await auth(req);
}

export async function GET() {
  return new Response('auth token');
}
