import clsx from 'clsx';
import { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit';
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, type, className }) => {
  return (
    <button
      type={type}
      className={clsx(
        className && className,
        'bg-primary-dark rounded-lg text-primary-light p-5'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
