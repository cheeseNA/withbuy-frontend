import { auth } from '../firebase';
import { GoogleAuthProvider, GithubAuthProvider, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from './StyledFirebaseAuth';
import { useNavigate } from 'react-router-dom';

export const FirebaseSignIn = () => {
  const navigate = useNavigate();

  const uiConfig = {
    signInFlow: 'popup',
    callbacks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      signInSuccessWithAuthResult: (_: any) => {
        navigate('/');
        return false;
      },
    },
    signInOptions: [EmailAuthProvider.PROVIDER_ID, GoogleAuthProvider.PROVIDER_ID, GithubAuthProvider.PROVIDER_ID],
  };

  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};
