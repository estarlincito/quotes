import Label from '@UI/label';
import clsx from 'clsx';

const QuoteInput = () => {
  return (
    <>
      <Label title='Quote' />
      <textarea
        className={clsx(
          'p-3 outline-none rounded-md',
          'text-text-light-primary font-light'
        )}
        name='quote'
        placeholder='Write your quote'
        required
      />
    </>
  );
};

export default QuoteInput;
