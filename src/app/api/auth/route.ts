import auth from '@/lib/auth';
import isDev from '@/lib/isDev';
import { serialize } from 'cookie';

export const GET = async () => {
  return new Response('auth token');
};

export const POST = async (req: Request) => {
  return await auth(req);
};

export const DELETE = async () => {
  return new Response(
    JSON.stringify({ success: true, message: 'Session has bin deleted' }),

    {
      status: 200,
      headers: {
        'Set-Cookie': serialize('user-token', '', {
          httpOnly: true,
          path: '/',
          secure: !isDev,
        }),
      },
    }
  );
};
