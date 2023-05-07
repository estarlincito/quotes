import user from './user';

export async function POST(req: Request) {
  return await user(req);
}
