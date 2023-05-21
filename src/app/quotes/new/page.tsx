import QuoteForm from '@/components/quoteform';
import Container from '@UI/container';
import Header from '@UI/header';

const title = 'Add Quote';
export const metadata = {
  title,
  description: 'Here you can create new Quotes',
};

const NewPage = () => {
  return (
    <Container>
      <Header title={title} summary='Here you can create new Quotes' />
      <br />
      <QuoteForm />
    </Container>
  );
};

export default NewPage;
