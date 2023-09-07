import { GetQuotes, Quotes } from '@/types/quotes';
import Base64 from '../base64';
import date from '../date';
import { default as errorHandling } from '../error';
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
    throw errorHandling('Error whent try to get quote sha and quotes');
  }
};

//add
const add = async (sha: string, content: string) => {
  try {
    await octokit.request(`PUT ${url}`, {
      ...op,
      message: JSON.stringify(date),
      committer: {
        name: 'Estarlincito',
        email: 'estarlincito@github.com',
      },
      content,
      sha,
    });
  } catch (error) {
    throw errorHandling('Error whent try to add new quote to github');
  }
};

const newQuote = async (req: Request) => {
  const newQ = (await req.json()) as Quotes;
  const getData = await get();

  if (!getData) {
    return;
  }

  const decodedQuotes = new Base64(getData.quotes).decoded;
  const parseQuotes = JSON.parse(decodedQuotes) as Quotes[];

  if (parseQuotes.find((quote) => quote.quote === newQ.quote)) {
    return { success: false, message: 'This Quotes is duplicate' };
  }

  const newQuotes = [
    ...parseQuotes,
    { ...newQ, addedAt: new Date().getTime() },
  ];

  const stringQuotes = JSON.stringify(newQuotes);
  const ecodedQuotes = new Base64(stringQuotes).encoded;
  await add(getData.sha, ecodedQuotes);
  return { success: true, message: 'Quote has bin added' };
};

export default newQuote;
