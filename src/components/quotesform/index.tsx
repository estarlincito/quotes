'use client';
import useForm from '@/Hooks/useForm';

import Form from '@UI/form';
import { Button } from '@radix-ui/themes';
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
      <Button>Add</Button>
    </Form>
  );
};

export default QuotesForm;
