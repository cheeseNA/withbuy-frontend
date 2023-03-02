import { useQuery } from 'react-query';
import axios from 'axios';
import { Item } from '../types/types';

export const useQueryItems = () => {
  const getItems = async () => {
    const { data } = await axios.get<Item[]>(`${process.env.REACT_APP_API_URL}/item`);
    return data;
  };
  return useQuery({
    queryKey: 'items',
    queryFn: getItems,
    staleTime: Infinity,
  });
};
