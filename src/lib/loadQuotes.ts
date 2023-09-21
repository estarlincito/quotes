import { Quotes } from '@/types/quotes';

const loadQuotes = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_en.json'
  );
  const quotes = await res.json();
  return quotes as Quotes[];
};

export default loadQuotes;
