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
    //Author
    if (name === 'author') {
      const authors = items.filter((item) =>
        item.toLowerCase().includes(values.author.toLowerCase())
      );
      //show options list
      if (values.author !== '') {
        setData(authors);
        setActive(true);
      } else {
        setActive(false);
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

    //Tags
    if (name === 'tags') {
      const inputV = values.tags.split(' ');

      if (items.some((elem) => inputV.includes(elem))) {
        const newTags = data.filter((item) => !inputV.includes(item));
        console.log(newTags);
        setData(newTags);
      } else {
      }

      //neet filter and hide if value is field
      const tags = items.filter((item) =>
        item.includes(values.author.toLowerCase())
      );
      //show options list
      if (values.tags !== '') {
        setData(tags);
        setActive(true);
      } else {
        setActive(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, values]);

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
