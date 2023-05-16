import ApiUrl from '@/constants/url';
import ErrorHandling from '@/lib/error';
import { Quotes } from '@/types/quotes';
import clsx from 'clsx';
import { FC } from 'react';
import Button from './UI/button';

interface FormQuoteProps {}

const css = {
  form: clsx(
    'bg-secondary-light',
    'flex flex-col gap-y-1 p-5 min-w-[400px]',
    'rounded-lg'
  ),
  input: clsx(
    'p-3 outline-none rounded-md',
    'text-text-light-primary font-light'
  ),
};

const FormQuote: FC<FormQuoteProps> = ({}) => {
  const handleAction = async (formdata: FormData) => {
    'use server';

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
      const res = await fetch(ApiUrl.quote, {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify(newQ),
      });
      console.log(
        'the problem is you try to doe fetch from server an you don have cession on server check the middleware'
      );
      return console.log(res);
      return await res.json();

      // toast('Your name has been updated successfully.',
      // {theme: 'dark' type: 'success' autoclose: 2000})
    } catch (error) {
      throw ErrorHandling('Error whent try to send new quote to local api');
    }
  };
  return (
    <form action={handleAction} className={css.form}>
      <label className='font-bold dark:text-text-light-primary'>Title</label>
      <input
        className={css.input}
        name='title'
        type='text'
        placeholder='Write quote title'
        required
      />

      <label className='font-bold dark:text-text-light-primary'>Quote</label>
      <textarea
        className={css.input}
        name='quote'
        placeholder='Write your quote'
        required
      />

      <label className='font-bold dark:text-text-light-primary'>Author</label>
      <input
        className={css.input}
        name='author'
        type='text'
        placeholder='Write quote author'
        required
      />

      <label className='font-bold dark:text-text-light-primary'>Url</label>
      <input
        className={css.input}
        name='url'
        type='text'
        placeholder='Write quote url'
        required
      />

      <label className='font-bold dark:text-text-light-primary'>Tags</label>
      <select className={css.input} name='tags' id='tags' multiple required>
        <option value='education'>education</option>
        <option value='psychological'>psychological</option>
        <option value='tech'>tech</option>
        <option value='ui'>ui</option>
        <option value='work'>work</option>
        <option value='fantasy'>fantasy</option>
        <option value='romance'>romance</option>
      </select>

      <Button className='mt-5' type='submit'>
        Add
      </Button>
    </form>
  );
};

export default FormQuote;
