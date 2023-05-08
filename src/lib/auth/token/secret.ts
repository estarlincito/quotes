const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error('the environment variable JW SECRET KEY is not set.');
  }

  return secret;
};

export default getJwtSecretKey;
