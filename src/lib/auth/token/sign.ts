import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';
import getJwtSecretKey from './secret';

const singToken = async (name: string, email: string) => {
  const token = await new SignJWT({ name, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime('50m')
    .sign(new TextEncoder().encode(getJwtSecretKey()));

  //saved session on cookie
  //   cookies().set({
  //     name: 'user-token',
  //     value: token,
  //     httpOnly: true,
  //     path: '/',
  //     secure: !isDev,
  //   });
  return token;
};

export default singToken;
