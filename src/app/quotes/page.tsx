import quotes from '@/assets/quotes.json';
import Card from '@/components/card';
import Container from '@UI/container';
import Header from '@UI/header';
import { Box, Button, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

export const metadata = {
  title: 'All Quotes',
  description: 'Check my quotes list!',
};

const QuotesPage = () => {
  return (
    <Container>
      <Header title='All <b>Quotes</b>' summary='Check my quotes list!' />

      <Flex my='5' direction='column' gap='5'>
        {quotes.map((quote, index) => (
          <Text as='span' key={index}>
            <Card {...quote} />
          </Text>
        ))}
      </Flex>

      <Box>
        <Link href='/' target='_self'>
          <Button variant='solid'>Back to Home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default QuotesPage;
