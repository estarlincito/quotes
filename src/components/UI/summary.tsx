import { Blockquote } from '@radix-ui/themes';
import { FC } from 'react';

interface SummaryProps {
  text: string;
}
const Summary: FC<SummaryProps> = ({ text }) => {
  return (
    <Blockquote
      my='5'
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default Summary;
