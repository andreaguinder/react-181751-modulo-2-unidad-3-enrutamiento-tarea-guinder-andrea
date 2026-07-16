import React, { createContext, useContext, useState } from 'react';
import LoginModal from '../components/LoginModal/LoginModal'; // Ajustá la ruta según tu proyecto

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, openLogin, closeLogin }}>
      {children}
      

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeLogin} 
        onLoginSuccess={login} 
      />
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}