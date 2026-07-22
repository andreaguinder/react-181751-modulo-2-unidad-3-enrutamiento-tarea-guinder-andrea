import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginModal from '../LoginModal/LoginModal';
import { useAuth } from '../../context/AuthContext';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
    const { isLoginOpen, closeLogin, login } = useAuth();

    return (
        <div className={styles.layoutContainer}>
            <Header />

            <main className={styles.mainContent}>
                <Outlet />
            </main>

            <Footer />

            <LoginModal 
              isOpen={isLoginOpen} 
              onClose={closeLogin} 
              onLoginSuccess={login} 
            />
        </div>
    );
}

export default MainLayout;