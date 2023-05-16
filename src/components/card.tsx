import { Quotes } from '@/types/quotes';
import clsx from 'clsx';
import { FC } from 'react';

const Card: FC<Quotes> = ({ quote, author, id }) => {
  const textColors = clsx(
    'text-text-light-disabled',
    'dark:text-text-dark-disabled'
  );
  return (
    <div
      className={clsx(
        'flex flex-col gap-y-3',
        'bg-secondary-light dark:bg-secondary-dark',
        'p-5 rounded-lg shadow-sm'
      )}
    >
      <blockquote className='font-mono'>&#34;{quote}&#34;</blockquote>
      <h3 className={clsx(textColors, 'font-bold text-small')}>-{author}-</h3>
      <span className={clsx(textColors, 'text-mini mt-5 font-mono')}>
        ID: {id}
      </span>
    </div>
  );
};

export default Card;
