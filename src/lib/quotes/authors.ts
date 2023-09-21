import loadQuotes from '../loadQuotes';
import removeD from './removed';

const authors = async () => {
  const quotes = await loadQuotes();
  const _authors = quotes.map((quote) => quote.author);
  const authors = removeD(_authors);

  const data = authors.map((items) => {
    return { value: items, label: items };
  });

  return data;
};

export default authors;
