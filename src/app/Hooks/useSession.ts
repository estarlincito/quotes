import verifyToken from '@/lib/auth/token/verify';
import { cookies } from 'next/headers';

const useSession = async () => {
  const cookiesList = cookies();
  const token = cookiesList.get('user-token')?.value;

  const isLogin = await verifyToken(token!);

  return { isLogin };
};

export default useSession;
