import authors from '@/lib/quotes/authors';
import tags from '@/lib/quotes/tags';

//formquotes
//option tags
export const optiontags = tags().map((tag) => {
  return { value: tag, label: tag };
});

//option authors
export const optionauthors = authors().map((author) => {
  return { value: author, label: author };
});
