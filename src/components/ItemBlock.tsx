import { FC } from 'react';
import { Item } from '../types/types';

export const ItemBlock: FC<{ item: Item }> = ({ item }) => {
  return (
    <a href='https://google.com'>
      <div className='w-64 h-64 rounded-xl overflow-hidden border-2 bg-white shadow-md hover:shadow-xl'>
        <img
          className='object-cover w-full h-32'
          src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        />
        <div className='p-3'>
          <div className='text-xl font-semibold text-slate-800'>{item.title}</div>
          <div className='text-sm text-slate-600'>{item.description}</div>

          <div className='mt-4'>
            <div className='flex items-center'>
              <img
                className='object-cover w-8 h-8 rounded-full'
                src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
              />
              <div className='w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-300 border-dashed'></div>
              <div className='mx-2 text-sm text-gray-600'>
                {item.joining_person.length} / {item.num_persons_required}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
