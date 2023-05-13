import quotes from '@/assets/quotes.json';
import ButtonAdd from '@/components/buttonadd';
import Card from '@/components/card';
import Container from '@UI/container';
import Header from '@UI/header';
import Link from 'next/link';
import useSession from './Hooks/useSession';

export const metadata = {
  title: 'Estarlincito Quotes',
  description: 'Hey Check my favorite quotes list',
};

const HomePage = async () => {
  const { isLogin } = await useSession();
  const random = Math.floor(Math.random() * quotes.length);

  return (
    <Container>
      <Header
        title='Hello There, Welcome to my <b>Quotes</b> list!'
        summary='Here you can find amazing quotes to inspire your day, good luck!'
      />

      <div className='my-8'>
        <Card {...quotes[random]} />
      </div>

      <div>
        <Link href='/quotes' className='font-bold text-primary-dark'>
          View more Quotes
        </Link>
      </div>

      {isLogin === null ? null : <ButtonAdd />}
    </Container>
  );
};

export default HomePage;
