import { get } from '@vercel/edge-config';
import Base64 from '../base64';

interface User {
  id: number;
  email: string;
  password: string;
}

const userDb = async () => {
  try {
    const admin = ((await get('admin')) as string) || null;
    return JSON.parse(new Base64(admin!).decoded) as User;
  } catch (error) {
    throw new Error('check if db config is correct');
  }
};

export default userDb;
