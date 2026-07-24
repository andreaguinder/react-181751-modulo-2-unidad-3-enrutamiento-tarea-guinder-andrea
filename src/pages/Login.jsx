import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/Pages.module.scss';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // O tu función para setear el login
  const navigate = useNavigate();
  const location = useLocation();

  // Si vino redirigido de una ruta protegida, nos guardamos esa ruta. Si no, va al inicio '/'.
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // Cambia isLoggedIn a true en el Context
    navigate(from, { replace: true }); // Redirige al destino original
  };

  return (
    <div className={styles.modalContainer}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="tu@email.com"
                  />
                </div>
      
                <div className={styles.inputGroup}>
                  <label htmlFor="password">Contraseña</label>
                  <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    placeholder="••••••••"
                  />
                </div>
      
                <button type="submit" className={styles.submitButton}>
                  Ingresar
                </button>
              </form>
    </div>
  );
}

export default LoginPage;