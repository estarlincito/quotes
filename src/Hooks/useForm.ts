'use client';
import endpoint from '@/constants/endpoint';
import errorHandling from '@/lib/error';
import { Body } from '@/types/body';
import { Quotes } from '@/types/quotes';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

const useForm = () => {
  const reset = useRef<HTMLFormElement>(null);

  //get input value
  const handleAction = async (formdata: FormData) => {
    type Name = 'title' | 'quote' | 'author' | 'url' | 'tags';

    const get = (name: Name) => {
      return formdata.get(name) as string;
    };

    const newQ: Quotes = {
      title: get('title'),
      quote: get('quote'),
      author: get('author'),
      url: get('url'),
      tags: formdata.getAll('tags') as string[],
    };

    //sent new quotes
    try {
      const res = await fetch(endpoint.quote, {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify(newQ),
      });

      //reset form value
      reset.current?.reset();
      //sent message
      const { success, message } = (await res.json()) as Body;
      if (!success) {
        toast.error(message);
        return;
      }
      toast.success(message);
    } catch (error) {
      throw errorHandling('Error whent try to send new quote to local api');
    }
  };

  return {
    reset,
    handleAction,
  } as const;
};

export default useForm;
