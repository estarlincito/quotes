import clsx from 'clsx';
import Link from 'next/link';

const ButtonAdd = () => {
  return (
    <>
      <hr className='my-3' />
      <div className='mt-8'>
        <Link
          href='/quotes/new'
          className={clsx(
            'bg-primary-light rounded-lg p-5',
            'dark:bg-primary-dark'
          )}
        >
          Add new Quote
        </Link>
      </div>
    </>
  );
};

export default ButtonAdd;
