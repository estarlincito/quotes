import errorHandling from '@/lib/error';

const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw errorHandling('the environment variable JW SECRET KEY is not set.');
  }

  return secret;
};

export default getJwtSecretKey;
