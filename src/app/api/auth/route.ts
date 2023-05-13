import auth from '@/lib/auth';

export const POST = async (req: Request) => {
  return await auth(req);
};

export const GET = async () => {
  return new Response('auth token');
};
