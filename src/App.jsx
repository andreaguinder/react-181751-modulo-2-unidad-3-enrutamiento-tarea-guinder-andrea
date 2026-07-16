import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Producto from './pages/Producto';
import Header from './components/Header/Header'

import './index.scss'

function App() {

  return (
<>
<AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/producto/:id' element={<Producto />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      </AuthProvider>
</>
  );
}

export default App;
