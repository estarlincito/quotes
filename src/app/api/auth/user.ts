import { getJwtSecretKey } from '@/lib/auth';
import Base64 from '@/lib/base64';
import { compare } from 'bcrypt';
import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';

export default async function user(req: Request) {
  const user = {
    name: 'Estarlincito',
    email: process.env.ADMIN_EMAIL,
  };

  //if user and passwor same env

  const auth = req.headers.get('authorization');

  if (!auth) {
    return new Response('you need authorization', { status: 400 });
  }

  const credentials = (c: number) => {
    const basic = new Base64(auth.replace('Basic ', '')).decoded;
    return basic.split(':')[c];
  };

  const email = credentials(0) === process.env.ADMIN_EMAIL;
  const password = await compare(credentials(1), '');

  if (email && password) {
    const token = await new SignJWT(user)
      .setProtectedHeader({ alg: 'HS256' })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime('50m')
      .sign(new TextEncoder().encode(getJwtSecretKey()));

    //session
    // cookies().set({
    //   name: 'user-token',
    //   value: token,
    //   httpOnly: true,
    //   path: '/',
    //   secure: !isDev,
    // });

    return new Response('authenticated', { status: 200 });
  } else {
    return new Response('Invalid credentials', { status: 400 });
  }
}
