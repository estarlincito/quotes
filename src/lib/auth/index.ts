import Base64 from '@/lib/base64';
import isDev from '@/lib/isDev';
import { compare } from 'bcryptjs';
import { serialize } from 'cookie';
import singToken from './token/sign';
import userDb from './user';

class Res {
  static body(success: boolean, message: string) {
    return JSON.stringify({ success, message });
  }

  static status(status: 200 | 400 | 401 | 500) {
    return { status };
  }
}

const auth = async (req: Request) => {
  const basic = req.headers.get('authorization');
  const { body, status } = Res;

  //if basic is undefine
  if (!basic) {
    return new Response(body(false, 'you need authorization'), status(400));
  }

  //destructure credentials
  const credentials = (c: number) => {
    const credential = new Base64(basic.replace('Basic ', '')).decoded;
    return credential.split(':')[c];
  };

  //check if store user and current user is true
  const user = userDb();
  const email = await compare(credentials(0), user.email);
  const password = await compare(credentials(1), user.password);

  //email and password are correct
  if (email && password) {
    const token = await singToken('Admin', user.email);

    return new Response(body(true, 'authenticated'), {
      status: 200,
      headers: {
        'Set-Cookie': serialize('user-token', token, {
          httpOnly: true,
          path: '/',
          secure: !isDev,
        }),
      },
    });
  }

  if (!email) {
    return new Response(body(false, 'Email is incorrect'), status(401));
  }

  if (!password) {
    return new Response(body(false, 'Password is incorrect'), status(401));
  }
};

export default auth;
