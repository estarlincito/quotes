import { FC } from 'react';

interface TitleProps {
  text: string;
}
const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default Title;
