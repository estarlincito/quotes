import { SignJWT } from 'jose';
import { nanoid } from 'nanoid';
import getJwtSecretKey from './secret';

const singToken = async () => {
  const token = await new SignJWT({})
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
};

export default singToken;
