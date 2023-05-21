import clsx from 'clsx';
import { FC } from 'react';

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <button
      type='submit'
      className={clsx(
        'mt-5 font-bold',
        'bg-primary-dark rounded-lg text-primary-light p-5'
      )}
    >
      {title}
    </button>
  );
};

export default Button;
