'use client';
import endpoint from '@/constants/endpoint';
import Base64 from '@/lib/base64';
import errorHandling from '@/lib/error';
import { Body } from '@/types/body';
import { toast } from 'react-hot-toast';
import Button from './UI/button';
import Form from './UI/form';
import Input from './UI/input';
import Label from './UI/label';

const LoginForm = () => {
  const handleSubmit = async (formData: FormData) => {
    //auth
    const email = formData.get('email')!;
    const password = formData.get('password')!;
    const auth = new Base64(`${email}:${password}`).encoded;

    try {
      //sent auth
      const res = await fetch(endpoint.auth, {
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
        toast.error(message);
        return;
      }

      window.location.href = '/quotes/new';
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
