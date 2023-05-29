'use client';
import Link from 'next/link';
import { FC } from 'react';

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError: FC<GlobalErrorProps> = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h3>Something went wrong!</h3>
        <h1>{error.message}</h1>
        <p>
          Please try again later or contact support if the problem persists.
        </p>
        <button onClick={() => reset()}>Try again</button>
        <Link href='/'>Go back To Home</Link>
      </body>
    </html>
  );
};

export default GlobalError;
