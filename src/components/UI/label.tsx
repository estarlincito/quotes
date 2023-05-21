import { FC } from 'react';

interface LabelProps {
  title: string;
}

const Label: FC<LabelProps> = ({ title }) => {
  return (
    <label className='font-bold dark:text-text-light-primary'>{title}</label>
  );
};

export default Label;
