import { GetQuotes } from '@/types/quotes';
import Base64 from './base64';
import { octokit } from './octokit';

const op = {
  owner: 'Estarlincito',
  repo: 'quotes',
  path: '/src/assets/data.json',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
};

const url = `/repos/estarlincito/quotes/contents${op.path}`;

class Quotes {
  //GET QUOTE
  static async get() {
    try {
      const res = await octokit.request(`GET ${url}`, op);

      return {
        sha: res.data.sha,
        quotes: res.data.content,
      } as GetQuotes;
    } catch (error) {
      console.log(error);
    }
  }

  //ADD QUOTE
  static async put(req: Request) {
    const { quote } = (await req.json()) as { quote: string };

    //get sha
    const _sha = await this.get();
    if (_sha === undefined) {
      throw new Error('you need the last sha');
    }
    const { sha, quotes } = _sha;

    //parse data
    const data = JSON.parse(new Base64(quotes).decoded) as Quotes[];
    //set date or ID
    const addedAt = new Date().getTime();

    //update data
    const upData = [...data, JSON.parse(new Base64(quote).decoded)];

    const content = new Base64(JSON.stringify(upData)).encoded;

    //update
    const res = await octokit.request(`PUT ${url}`, {
      ...op,
      message: addedAt,
      committer: {
        name: 'Estarlincito',
        email: 'estarlincito@github.com',
      },
      content,
      sha,
    });

    return JSON.stringify(res);
  }
}

export default Quotes;
