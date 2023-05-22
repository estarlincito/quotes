'use client';
import endpoint from '@/constants/endpoint';
import ErrorHandling from '@/lib/error';
import { Body } from '@/types/body';
import { Quotes } from '@/types/quotes';
import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import Button from './UI/button';
import Form from './UI/form';
import Input from './UI/input';
import Label from './UI/label';

const QuoteForm = () => {
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

      const { success, message } = (await res.json()) as Body;
      if (!success) {
        toast.error(message);
        return;
      }
      toast.success(message);
    } catch (error) {
      throw ErrorHandling('Error whent try to send new quote to local api');
    }
  };

  return (
    <Form action={handleAction}>
      <Label title='Title' />
      <Input name='title' type='text' placeholder='Write quote title' />

      <Label title='Quote' />
      <textarea
        className={clsx(
          'p-3 outline-none rounded-md',
          'text-text-light-primary font-light'
        )}
        name='quote'
        placeholder='Write your quote'
        required
      />

      <Label title='Author' />
      <Input name='author' type='text' placeholder='Write quote author' />

      <Label title='Url' />
      <Input name='url' type='text' placeholder='Write quote url' />

      <Label title='Tags' />
      <select
        name='tags'
        id='tags'
        multiple
        required
        className={clsx(
          'p-3 outline-none rounded-md',
          'text-text-light-primary font-light'
        )}
      >
        <option value='education'>education</option>
        <option value='psychological'>psychological</option>
        <option value='tech'>tech</option>
        <option value='ui'>ui</option>
        <option value='work'>work</option>
        <option value='fantasy'>fantasy</option>
        <option value='romance'>romance</option>
      </select>

      <Button title='Add' />
    </Form>
  );
};

export default QuoteForm;
