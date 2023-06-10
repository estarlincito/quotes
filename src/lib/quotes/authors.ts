import quotes from '@assets/quotes.json';
import removeD from './removed';

const authors = () => {
  //get all authors
  const _authors = quotes.map((quote) => quote.author);
  const authors = removeD(_authors);

  const data = authors.map((items) => {
    return { value: items, label: items };
  });

  return data;
};

export default authors;
