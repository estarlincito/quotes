import Link from 'next/link';

const Copyright = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <p className='text-sm mt-5'>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
      <Link href='http://estarlincito.com' target='_blank'>
        Estarlincito
      </Link>
    </p>
  );
};

export default Copyright;
