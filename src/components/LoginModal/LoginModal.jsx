import React, { useState } from 'react';
import styles from './LoginModal.module.scss';

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null; // Si no está abierto, no renderiza nada

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login intentado con:', { email, password });
    
    if (onLoginSuccess) {
      onLoginSuccess(); 
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>

      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <h2>Iniciar Sesión</h2>
        <p>Necesitás tener una cuenta para agregar productos al carrito.</p>

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
    </div>
  );
}

export default LoginModal;