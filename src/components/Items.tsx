import { useQueryItems } from '../hooks/useQueryItems';
import { ItemBlock } from './ItemBlock';

export const Items = () => {
  const { data: dataItems, isLoading: isLoadingItems } = useQueryItems();
  return (
    <div>
      {isLoadingItems ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-row flex-wrap gap-10 my-10 mx-10'>
          {dataItems?.map((item) => (
            <ItemBlock key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
