import { hash } from 'bcrypt';

export const password = async (text: string, dig: number) => {
  return await hash(text, dig);
};
