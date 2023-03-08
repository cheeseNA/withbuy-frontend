import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useProcessAuth } from '../hooks/useProcessAuth';

export const Header = () => {
  const { logout } = useProcessAuth();
  const user = useAuthContext();

  return (
    <nav className='flex justify-between items-center flex-wrap bg-teal-500 p-4 sticky top-0 z-50'>
      <Link to='/'>
        <div className='mx-3 text-2xl font-semibold text-slate-100'>KN</div>
      </Link>
      {user ? (
        <div className='relative mx-3 flex items-center'>
          <button type='button' className='peer rounded-full focus:ring-4 focus:ring-slate-300'>
            <img
              className='w-10 h-10 rounded-full'
              src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
            />
          </button>

          <div className='absolute right-0 top-8 z-40 hidden flex-col hover:flex peer-focus:flex my-4 list-none bg-white divide-y divide-slate-100 rounded-md shadow'>
            <div className='px-4 py-3'>
              <span className='block text-slate-900'>Hoge Fuga</span>
              <span className='block text-slate-500'>test@test.com</span>
            </div>
            <ul>
              <li>
                <a href='#' className='block px-4 py-2 text-slate-700 hover:bg-slate-100'>
                  My page
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 text-slate-700 hover:bg-slate-100'>
                  Settings
                </a>
              </li>
            </ul>
            <a href='#' onClick={logout} className='block px-4 py-2 text-pink-600 hover:bg-slate-100'>
              Log out
            </a>
          </div>
        </div>
      ) : (
        <div>
          <Link
            to='/login'
            className='inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white'
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};
