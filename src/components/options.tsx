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
  const [data, setData] = useState([] as string[]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    //show options list
    if (values[name] !== '') {
      setActive(true);
    } else {
      setActive(false);
    }

    //Author
    if (name === 'author') {
      //set data
      if (values.author.startsWith(' ')) {
        setData(items);
        if (values.author.length >= 2) {
          const _data = items.filter((item) =>
            item.toLowerCase().includes(values.author.toLowerCase())
          );
          setData(_data);
        }
      }

      //if author value exit on data
      if (data.includes(values.author)) {
        setActive(false);
      }
      //if author value is field
      if (values.author.endsWith(' ') && values.author.length > 2) {
        setActive(false);
      }
    }
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
