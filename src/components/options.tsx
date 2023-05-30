import { Name, Values } from '@/types/values';
import clsx from 'clsx';
import { FC, useState } from 'react';

interface OptionsProps {
  items: string[];
  handleSelec: (item: string, name: Name) => void;
  values: Values;
  name: Name;
}

const Options: FC<OptionsProps> = ({ items, handleSelec, values, name }) => {
  //const _items = items.filter((item) => item.includes(values[name]));
  const [data, setData] = useState(
    items.filter((item) => item.includes(values[name]))
  );

  //console.log(values[name].endsWith(' '));

  //console.log(data.indexOf(values[name].replace(' ', '')));

  console.log(data.filter((item) => item !== values[name].replace(' ', '')));
  //   useEffect(() => {
  //     if (data.includes(values[name])) {
  //       console.log(data.indexOf(values[name]));
  //       //setData([...data]);
  //     }
  //   }, [values]);

  return values[name] === '' || data.includes(values[name]) ? null : (
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
