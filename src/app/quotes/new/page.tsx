import FormQuote from '@/components/formquote';
import Container from '@UI/container';
import Header from '@UI/header';

const title = 'Add Quotes';
export const metadata = {
  title,
  description: 'Here you can create new Quotes',
};

const NewPage = () => {
  return (
    <Container>
      <Header title={title} summary='Here you can create new Quotes' />
      <div>
        <FormQuote />
      </div>
    </Container>
  );
};

export default NewPage;
