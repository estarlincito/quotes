import { FC } from 'react';

interface SubtitleProps {
  text: string;
}

const SubTitle: FC<SubtitleProps> = ({ text }) => {
  return <h2 className='text-subtitle'>{text}</h2>;
};

export default SubTitle;
