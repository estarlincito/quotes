import { Heading } from '@radix-ui/themes';
import { FC } from 'react';

interface TitleProps {
  text: string;
}
const Title: FC<TitleProps> = ({ text }) => {
  return (
    <Heading
      size='9'
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default Title;
