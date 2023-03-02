import { FC } from 'react';
import { Item } from '../types/types';

export const ItemBlock: FC<{ item: Item }> = ({ item }) => {
  return (
    <li>
      <div>{item.title}</div>
      <div>{item.description}</div>
    </li>
  );
};
