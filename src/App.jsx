import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/MainLayout/MainLayout';

import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Producto from './pages/Producto';

import './index.scss'

function App() {

  return (
<>
<AuthProvider>
      <Routes>
        

        <Route path="/" element={<MainLayout />}>
          
          <Route index element={<Inicio />} />
          <Route path="producto/:id" element={<Producto />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          
        </Route>

      </Routes>
    </AuthProvider>
</>
  );
}

export default App;
