import { FC } from 'react';

interface SummaryProps {
  text: string;
}
const Summary: FC<SummaryProps> = ({ text }) => {
  return (
    <summary
      className='my-3'
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default Summary;
