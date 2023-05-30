import { Name, Values } from '@/types/values';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

interface OptionsProps {
  items: string[];
  handleSelec: (item: string, name: Name) => void;
  values: Values;
  name: Name;
}

const Options: FC<OptionsProps> = ({ items, handleSelec, values, name }) => {
  //   const [data, setData] = useState(
  //     items.filter((item) => item.includes(values[name]))
  //   );

  const data = items.filter(
    (item) =>
      !item.includes(
        name === 'author' ? values[name] : values[name].replaceAll(' ', '')
      )
  );
  const [active, setActive] = useState(false);

  useEffect(() => {
    //if input value change
    if (values[name].length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }

    //if is author turn off active
    if (
      (name === 'author' && data.includes(values[name])) ||
      (values[name].endsWith(' ') && values[name].length > 4)
    ) {
      setActive(false);
    }

    //if tags
    if (name === 'tags' && values[name].endsWith(' ')) {
      setActive(true);
    }
    // if (name === 'author') {
    //   //   const authors = items.filter((item) => item.includes(values[name]));
    //   //   setData(authors);
    //   //   //if tags input end with space
    //   //   if (values[name].endsWith(' ')) {
    //   //     if (values[name].length > 4) {
    //   //       setActive(false);
    //   //     } else {
    //   //       setActive(true);
    //   //     }
    //   //   }
    //   //   //if author input have some authors value
    //   //   if (values[name] !== ' ' || authors.includes(values[name])) {
    //   //     setActive(false);
    //   //   }
    // }
    // if (name === 'tags') {
    //   //   const tags = items.filter((item) =>
    //   //     item.includes(values[name].replace(' ', ''))
    //   //   );
    //   //   setData(tags);
    //   //   //if author input have some authors value
    //   //   if (tags.includes(values[name])) {
    //   //     setActive(false);
    //   //   }
    // }
  }, [data, items, name, values]);

  return active === false ? null : (
    <ul
      className={clsx(
        'flex flex-col',
        'bg-text-dark-primary rounded-lg',
        'dark:text-text-light-primary'
      )}
    >
      {data.map((item, id) => (
        <li
          key={id}
          className={clsx(
            'p-2 font-bold',
            'hover:bg-secondary-main cursor-pointer'
          )}
          onClick={() => {
            handleSelec(item, name);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Options;
