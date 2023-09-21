import Card from '@/components/card';
import loadQuotes from '@/lib/loadQuotes';
import Container from '@UI/container';
import Header from '@UI/header';
import { Box, Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

export const metadata = {
  title: 'Estarlincito Quotes',
  description: 'Hey Check my favorite quotes list',
};

const HomePage = async () => {
  const quotes = await loadQuotes();
  const random = Math.floor(Math.random() * quotes.length);

  return (
    <Container>
      <Header
        title='Hello There, Welcome to my <b>Quotes</b> list!'
        summary='Here you can find amazing quotes to inspire your day, good luck!'
      />

      <Box my='8'>
        <Card {...quotes[random]} />
      </Box>

      <Flex direction='column' gap='3'>
        <Link href='/quotes'>
          <Button variant='solid'>View more Quotes</Button>
        </Link>
        <Link href='/quotes/new'>
          <Button variant='surface'>Add Quote</Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default HomePage;
