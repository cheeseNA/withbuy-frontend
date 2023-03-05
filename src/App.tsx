import { Auth } from './components/Auth';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Items } from './components/Items';
import { ItemPage } from './components/ItemPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Items />} />
          <Route path='login' element={<Auth />} />
          <Route path='item/:id' element={<ItemPage />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
