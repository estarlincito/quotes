import clsx from 'clsx';
import React, { FC, RefObject } from 'react';

interface FormProps {
  children: React.ReactNode;
  action: (formdata: FormData) => Promise<void>;
  reset?: RefObject<HTMLFormElement>;
}

const Form: FC<FormProps> = ({ children, action, reset }) => {
  return (
    <form
      action={action}
      ref={reset}
      className={clsx(
        'bg-secondary-light',
        'flex flex-col gap-y-3 p-5 min-w-[350px] md:min-w-[550px]',
        'rounded-lg'
      )}
    >
      {children}
    </form>
  );
};

export default Form;
