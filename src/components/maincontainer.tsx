import { ChildrenProps } from '@/types/children';
import { FC } from 'react';

const MainContainer: FC<ChildrenProps> = ({ children }) => {
  return <main className='container mx-auto p-5 md:p-0'>{children}</main>;
};

export default MainContainer;
