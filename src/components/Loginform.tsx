import ApiUrl from '@/constants/url';
import Base64 from '@/lib/base64';
import errorHandling from '@/lib/error';
import isDev from '@/lib/isDev';

import { cookies } from 'next/headers';

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

    try {
      //sent auth
      const res = await fetch(ApiUrl.auth, {
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
        throw errorHandling('Error whent try get userToken');
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

      // redirect('/quotes/new');
    } catch (error) {
      throw errorHandling('Error whent try to auth');
    }
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
