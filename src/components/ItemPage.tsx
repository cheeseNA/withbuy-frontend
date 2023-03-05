import { useParams } from 'react-router-dom';

export const ItemPage = () => {
  const params = useParams();
  return <div>{params.id}</div>;
};
