import authors from '@/lib/quotes/authors';
import tags from '@/lib/quotes/tags';

//formquotes
//option tags
export const optiontags = async () => {
  return (await tags()).map((tag) => {
    return { value: tag, label: tag };
  });
};

//option authors
export const optionauthors = async () => {
  return (await authors()).map((author) => {
    return { value: author, label: author };
  });
};
