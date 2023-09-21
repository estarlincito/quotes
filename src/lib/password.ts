import { hash } from 'bcryptjs';

export const password = async (
  myPlaintextPassword: string,
  saltRounds: number
) => {
  return await hash(myPlaintextPassword, saltRounds);
};
