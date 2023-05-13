import { FC } from 'react';
import Summary from './summary';
import Title from './title';

interface HeaderProps {
  title: string;
  summary: string;
}

const Header: FC<HeaderProps> = ({ title, summary }) => {
  return (
    <header>
      <Title text={title} />
      <Summary text={summary} />
    </header>
  );
};

export default Header;
