import { useParams } from 'react-router-dom';
import { useQueryItem } from '../hooks/useQueryItem';

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  if (typeof id === undefined) {
    return <div> Id not specified </div>;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: item, isLoading: isLoadingItem } = useQueryItem(id!);
  return (
    <div>
      {isLoadingItem ? (
        <p>Loading...</p>
      ) : item ? (
        <div className='lg:w-4/5 mx-auto p-5 flex flex-wrap'>
          <img
            className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
            src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h1 className='text-gray-900 text-3xl font-medium mb-1 truncate'>{item.title}</h1>
            <div className='flex mb-4'>
              <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' href={item.url}>
                {item.url}
              </a>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-row-reverse items-center space-x-reverse -space-x-4'>
                    {Array(item.num_persons_required - item.joining_person.length)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className='relative w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-300 border-dashed'
                        ></div>
                      ))}
                    <img
                      className='relative object-cover w-8 h-8 rounded-full'
                      src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
                    />
                  </div>
                  <div className='whitespace-nowrap mx-2 text-sm text-gray-600'>
                    {item.joining_person.length} / {item.num_persons_required}
                  </div>
                </div>
              </div>
              <span className='font-medium text-2xl text-gray-900'>&yen;5800</span>
            </div>
            <div className='flex'>
              <button className='grow mt-4 text-xl font-semibold text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded'>
                Join
              </button>
            </div>
            <p className='leading-relaxed'>{item.description}</p>
          </div>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
};
