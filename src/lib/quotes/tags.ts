import quotes from '@assets/quotes.json';
import removeD from './removed';

const tags = () => {
  //get all tags
  const _tags = quotes.flatMap((quote) => quote.tags);

  const tags = removeD(_tags);

  const data = tags.map((items) => {
    return { value: items, label: items };
  });

  return data;
};

export default tags;
