import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useQueryClient } from 'react-query';

export const useProcessAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    void auth.signOut();
    queryClient.removeQueries('items');
    queryClient.removeQueries('item');
    navigate('/');
  };

  return { logout };
};
