'use client';
import useForm from '@/Hooks/useForm';
import Button from '@UI/button';
import Form from '@UI/form';
import AuthorsSelec from './authors-select';
import QuoteInput from './quote-input';
import TagsSelec from './tags-select';
import TitleInput from './title-input';
import UrlInput from './url-input';

const QuotesForm = () => {
  const { reset, handleAction } = useForm();

  return (
    <Form action={handleAction} reset={reset}>
      <TitleInput />
      <QuoteInput />
      <AuthorsSelec />
      <UrlInput />
      <TagsSelec />
      <Button title='Add' />
    </Form>
  );
};

export default QuotesForm;
