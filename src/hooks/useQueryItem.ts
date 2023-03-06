import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { Item, Error } from '../types/types';
import { useNavigate } from 'react-router-dom';

export const useQueryItem = (id: string) => {
  const navigate = useNavigate();
  const getItem = async (id: string) => {
    const { data } = await axios.get<Item>(`${process.env.REACT_APP_API_URL}/item/${id}`);
    return data;
  };
  return useQuery({
    queryKey: ['item', id],
    queryFn: () => getItem(id),
    staleTime: Infinity,
    onError: (err: AxiosError<Error>) => {
      if (err.response) {
        alert(`${err.response.data.detail}\n${err.message}`);
        // if (
        //   err.response.data.detail == 'The CSRF token has expired.'
        // ) {
        //   navigate('/');
        // }
      } else {
        alert('axios error but no response');
      }
    },
  });
};
