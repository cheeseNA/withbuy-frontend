import { User } from 'firebase/auth';
import { createContext, useState, useContext, useEffect } from 'react';
import { FC } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext<User | null>(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
