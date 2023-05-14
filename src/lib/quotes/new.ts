import { GetQuotes, Quotes } from '@/types/quotes';
import Base64 from '../base64';
import date from '../date';
import { octokit } from '../octokit';

const op = {
  owner: 'Estarlincito',
  repo: 'quotes001',
  path: '/src/assets/quotes.json',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
};
const url = `/repos/estarlincito/quotes/contents${op.path}`;

//get quotes and sha
const get = async () => {
  try {
    const res = await octokit.request(`GET ${url}`, op);

    return {
      sha: res.data.sha,
      quotes: res.data.content,
    } as GetQuotes;
  } catch (error) {
    console.log(error);
  }
};

//add
const add = async (sha: string, content: string) => {
  const res = await octokit.request(`PUT ${url}`, {
    ...op,
    message: date,
    committer: {
      name: 'Estarlincito',
      email: 'estarlincito@github.com',
    },
    content,
    sha,
  });

  return res;
};

const newQuote = async (req: Request) => {
  const newQ = (await req.json()) as Quotes;
  const getData = await get();

  if (!getData) {
    throw new Error('Error whent try to get quote data');
  }
  const decodedQuotes = new Base64(getData.quotes).decoded;
  const parseQuotes = JSON.parse(decodedQuotes) as Quotes[];

  const newQuotes = [...parseQuotes, newQ];

  const stringQuotes = JSON.stringify(newQuotes);
  const ecodedQuotes = new Base64(stringQuotes).encoded;

  add(getData.sha, ecodedQuotes);
  return { success: true };
};

export default newQuote;
