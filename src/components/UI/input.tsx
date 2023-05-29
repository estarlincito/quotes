import clsx from 'clsx';
import { ChangeEventHandler, FC } from 'react';

interface InputProps {
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ name, type, placeholder, handleChange }) => {
  return (
    <input
      className={clsx(
        'p-3 outline-none rounded-md',
        'text-text-light-primary font-light'
      )}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  );
};

export default Input;
