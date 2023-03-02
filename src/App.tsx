import { Auth } from './components/Auth';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <Auth />
      </AuthProvider>
    </div>
  );
}

export default App;
