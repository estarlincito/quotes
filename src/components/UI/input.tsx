import clsx from 'clsx';
import { FC } from 'react';

interface InputProps {
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
}

const Input: FC<InputProps> = ({ name, type, placeholder }) => {
  return (
    <input
      className={clsx(
        'p-3 outline-none rounded-md',
        'text-text-light-primary font-light'
      )}
      name={name}
      type={type}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
