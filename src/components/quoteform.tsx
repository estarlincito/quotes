'use client';
import useForm from '@/Hooks/useForm';
import authors from '@/lib/quotes/authors';
import tags from '@/lib/quotes/tags';
import Button from '@UI/button';
import Form from '@UI/form';
import Input from '@UI/input';
import Label from '@UI/label';
import clsx from 'clsx';
import Options from './options';

const QuoteForm = () => {
  const { reset, values, handleSelec, handleChange, handleAction } = useForm();

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
      <Input
        name='author'
        value={values.author}
        type='text'
        placeholder='Write quote author'
        handleChange={handleChange}
      />

      <Options
        items={authors()}
        handleSelec={handleSelec}
        values={values}
        name='author'
      />

      <Label title='Url' />
      <Input name='url' type='text' placeholder='Write quote url' />

      <Label title='Tags' />

      <Input
        name='tags'
        value={values.tags}
        type='text'
        placeholder='Optional, separated by spaces'
        handleChange={handleChange}
      />

      <Options
        items={tags()}
        handleSelec={handleSelec}
        values={values}
        name='tags'
      />

      <Button title='Add' />
    </Form>
  );
};

export default QuoteForm;
