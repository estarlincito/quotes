interface Quote {
  title: string;
  quote: string;
  author: string;
  url: string;
  tags: string[];
  addedAt: number;
}

const newQuote = ({ title, quote, author, url, tags, addedAt }: Quote) => {
  return { title, quote, author, url, tags, addedAt };
};

export default newQuote;
