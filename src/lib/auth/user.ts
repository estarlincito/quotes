import Base64 from '../base64';
import errorHandling from '../error';

interface User {
  id: number;
  email: string;
  password: string;
}

// const userDb = async () => {
//   try {
//     const admin = ((await get('admin')) as string) || null;
//     return JSON.parse(new Base64(admin!).decoded) as User;
//   } catch (error) {
//     throw errorHandling('check if db config is correct');
//   }
// };

const userDb = () => {
  try {
    const admin = process.env.ADMIN;
    return JSON.parse(new Base64(admin!).decoded) as User;
  } catch (error) {
    throw errorHandling('check if db config is correct');
  }
};

export default userDb;
