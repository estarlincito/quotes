import quotes from '@assets/quotes.json';
import removeD from './removed';

const tags = () => {
  //get all tags
  const _tags = quotes.flatMap((quote) => quote.tags);
  return removeD(_tags);
};

export default tags;
