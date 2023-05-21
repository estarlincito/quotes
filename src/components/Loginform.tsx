import ApiUrl from '@/constants/url';
import Base64 from '@/lib/base64';
import errorHandling from '@/lib/error';
import isDev from '@/lib/isDev';

import { cookies } from 'next/headers';
import Button from './UI/button';
import Form from './UI/form';
import Input from './UI/input';
import Label from './UI/label';

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
    <Form action={handleSubmit}>
      <Label title='Email' />
      <Input name='email' type='email' placeholder='example@get.com' />
      <Label title='Password' />
      <Input name='password' type='password' placeholder='********' />

      <Button title='Login' />
    </Form>
  );
};

export default LoginForm;
