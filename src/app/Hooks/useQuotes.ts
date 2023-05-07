import { GetQuotes } from '@/types/quotes';
import { useState } from 'react';

export const useQuotes = () => {
  const [quote, setQuote] = useState({} as GetQuotes);

  //get Quotes
  const getQuotes = async () => {
    try {
      const res = await fetch('/api/quotes');
      const data = (await res.json()) as GetQuotes;

      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getQuotes };
};
