import { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Button;
