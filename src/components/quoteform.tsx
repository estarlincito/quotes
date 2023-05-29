'use client';
import endpoint from '@/constants/endpoint';
import ErrorHandling from '@/lib/error';
import tags from '@/lib/quotes/tags';
import { Body } from '@/types/body';
import { Quotes } from '@/types/quotes';
import clsx from 'clsx';
import { ChangeEventHandler, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from './UI/button';
import Form from './UI/form';
import Input from './UI/input';
import Label from './UI/label';

const QuoteForm = () => {
  const reset = useRef<HTMLFormElement>(null);
  //tags and author
  const [change, setChange] = useState<{ [x: string]: string }>({
    tags: '',
    author: '',
  });

  //getting tags and author
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, name },
  }) => {
    if (name === 'tags') {
    }
    //setChange({ [name]: value });
  };

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
      throw ErrorHandling('Error whent try to send new quote to local api');
    }
  };

  const handleSelec = (value: string) => {
    setChange({ tags: value });

    console.log(change);
  };

  return (
    <Form action={handleAction} reset={reset}>
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
      {/* <select
        name='tags'
        id='tags'
        multiple
        required
        className={clsx(
          'p-3 outline-none rounded-md',
          'text-text-light-primary font-light'
        )}
      >
        {optiontags.map(({ value, label }, id) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select> */}

      <Input
        name='tags'
        type='text'
        placeholder='Write quote tags'
        handleChange={handleChange}
      />
      <div className='flex flex-col'>
        {tags().map((item, id) => (
          <span
            key={id}
            className='p-1'
            onClick={() => {
              handleSelec(item);
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <Button title='Add' />
    </Form>
  );
};

export default QuoteForm;
