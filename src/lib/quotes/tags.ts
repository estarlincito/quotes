import loadQuotes from '../loadQuotes';
import removeD from './removed';

const tags = async () => {
  const quotes = await loadQuotes();
  const _tags = quotes.flatMap((quote) => quote.tags);

  const tags = removeD(_tags);

  const data = tags.map((items) => {
    return { value: items, label: items };
  });

  return data;
};

export default tags;
