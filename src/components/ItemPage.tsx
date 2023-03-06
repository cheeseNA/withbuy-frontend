import { useParams } from 'react-router-dom';
import { useQueryItem } from '../hooks/useQueryItem';

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  if (typeof id === undefined) {
    return <div> Id not specified </div>;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: dataItem, isLoading: isLoadingItem } = useQueryItem(id!);
  return (
    <div>
      {isLoadingItem ? (
        <p>Loading...</p>
      ) : (
        <div>{dataItem ? dataItem.title : 'Item Not Found'}</div>
      )}
    </div>
  );
};
