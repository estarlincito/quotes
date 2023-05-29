import quotes from '@assets/quotes.json';
import removeD from './removed';

const authors = () => {
  //get all authors
  const _authors = quotes.map((quote) => quote.author);
  return removeD(_authors);
};

export default authors;
