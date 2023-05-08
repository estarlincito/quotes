import { hash } from 'bcrypt';

export const password = async (
  myPlaintextPassword: string,
  saltRounds: number
) => {
  return await hash(myPlaintextPassword, saltRounds);
};
