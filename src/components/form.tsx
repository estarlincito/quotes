import Base64 from '@/lib/base64';

const LoginForm = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    //auth

    const email = formData.get('email')!;
    const password = formData.get('password')!;
    const auth = new Base64(`${email}:${password}`).encoded;

    //sent auth
    const res = await fetch('http://localhost:3000/api/auth', {
      cache: 'no-store',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + auth,
      },
    });

    const body = (await res.json()) as { success: string; message: string };
    console.log(body);
    ////create session
    // cookies().set({
    //   name: 'name',
    //   value: 'nahaakhdgdgkhdkgadgkgaagagag',
    //   httpOnly: true,
    //   path: '/',
    // });
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
