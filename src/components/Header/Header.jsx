import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import styles from './Header.module.scss';

const Header = () => {

  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to='/'>Inicio</Link>
      <Link className={styles.link} to='/nosotros'>Nosotros</Link>
      <Link className={styles.link} to='/contacto'>Contacto</Link>
      
      {isLoggedIn ? (
        <div className={styles.userSection}>
          <button className={styles.buttonLogout} onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      ) : (

        <Link className={styles.buttonLogin} to='/login'>
          Iniciar Sesión
        </Link>
      )}
    </nav>
  );
}

export default Header;