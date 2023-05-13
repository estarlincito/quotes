import quotes from '@/assets/quotes.json';
import Card from '@/components/card';
import Container from '@UI/container';
import Header from '@UI/header';
import Link from 'next/link';

export const metadata = {
  title: 'All Quotes',
  description: 'Check my quotes list!',
};

const QuotesPage = () => {
  return (
    <Container>
      <Header title='All <b>Quotes</b>' summary='Check my quotes list!' />

      <ul className='my-8 flex flex-col gap-5'>
        {quotes.map((quote, index) => (
          <li key={index}>
            <Card {...quote} />
          </li>
        ))}
      </ul>

      <div>
        <Link href='/' target='_self' className='font-bold text-primary-dark'>
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default QuotesPage;
