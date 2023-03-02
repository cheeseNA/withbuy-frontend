import { auth } from '../firebase';
import { GoogleAuthProvider, GithubAuthProvider, EmailAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from './StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [EmailAuthProvider.PROVIDER_ID, GoogleAuthProvider.PROVIDER_ID, GithubAuthProvider.PROVIDER_ID],
};

export const FirebaseSignIn = () => {
  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};
