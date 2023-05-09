import isDev from '../isDev';

const fetchUrl =
  isDev === true
    ? 'http://localhost:3000/api/auth'
    : 'https://quotes001.vercel.app/api/auth';

export default fetchUrl;
