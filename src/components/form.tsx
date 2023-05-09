import fetchUrl from '@/lib/auth/url';
import Base64 from '@/lib/base64';
import isDev from '@/lib/isDev';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

//Types
interface Body {
  success: string;
  message: string;
}

const LoginForm = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    //auth
    const email = formData.get('email')!;
    const password = formData.get('password')!;
    const auth = new Base64(`${email}:${password}`).encoded;

    //sent auth
    const res = await fetch(fetchUrl, {
      cache: 'no-store',
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + auth,
      },
    });

    //validate
    const { success, message } = (await res.json()) as Body;

    if (!success) {
      console.log(message);
    }

    //creating session
    const userToken = res.headers.get('Set-Cookie');

    if (!userToken) {
      return;
    }

    const token = (token: string) => {
      const replece = token.replace('user-token=', '');
      return replece.split(';')[0];
    };

    const ck = cookies() as any;

    ck.set({
      name: 'user-token',
      value: token(userToken),
      httpOnly: !isDev,
      path: '/',
    });

    redirect('/quotes/new');
  };

  return (
    <form action={handleSubmit}>
      <input
        className='p-5 rounded-sm'
        name='email'
        type='email'
        placeholder='example@get.com'
        required
      />
      <input
        className='p-5 rounded-sm'
        name='password'
        type='password'
        placeholder='********'
        required
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
