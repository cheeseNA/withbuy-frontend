import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className='flex items-center flex-wrap bg-teal-500 p-4'>
      <Link to='/'>
        <div className='mx-3 text-xl font-semibold text-slate-100'>KN</div>
      </Link>
    </nav>
  );
};
