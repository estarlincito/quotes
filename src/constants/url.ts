import isDev from '@/lib/isDev';

class ApiUrl {
  static readonly auth =
    isDev === true
      ? 'http://localhost:3000/api/auth'
      : 'https://quotes001.vercel.app/api/auth';

  static readonly quote =
    isDev === true
      ? 'http://localhost:3000/api/quotes'
      : 'https://quotes001.vercel.app/api/quotes';
}

export default ApiUrl;
