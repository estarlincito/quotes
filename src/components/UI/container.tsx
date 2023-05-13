import { ChildrenProps } from '@/types/children';
import { FC } from 'react';

const Container: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className='grid justify-center content-center min-h-[80vh]'>
      {children}
    </div>
  );
};

export default Container;
