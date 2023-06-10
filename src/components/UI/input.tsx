import clsx from 'clsx';
import { ChangeEventHandler, FC } from 'react';

interface InputProps {
  name: string;
  type: 'text' | 'email' | 'password';
  value?: string;
  placeholder: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  name,
  value,
  type,
  placeholder,
  handleChange,
}) => {
  return (
    <input
      className={clsx(
        'p-3 outline-none rounded-md',
        'text-text-light-primary font-light'
      )}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  );
};

export default Input;
