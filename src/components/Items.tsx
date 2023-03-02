import { useQueryItems } from '../hooks/useQueryItems';
import { ItemBlock } from './ItemBlock';

export const Items = () => {
  const { data: dataItems, isLoading: isLoadingItems } = useQueryItems();
  return (
    <div>
      {isLoadingItems ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {dataItems?.map((item) => (
            <ItemBlock key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};
