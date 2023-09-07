import { Quotes } from '@/types/quotes';
import { Blockquote, Card as Cardr, Heading, Text } from '@radix-ui/themes';
import { FC } from 'react';

const Card: FC<Quotes> = ({ quote, author, addedAt }) => {
  return (
    <Cardr variant='classic' size='4'>
      <Blockquote>{quote}</Blockquote>
      <br />
      <Heading size='2'>-{author}-</Heading>
      <Text hidden as='span'>
        Date: {addedAt}
      </Text>
    </Cardr>
  );
};

export default Card;
