
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styles from './ProductDetail.module.scss';
import LoginModal from '../LoginModal/LoginModal';
import SuccessModal from '../SuccessModal/SuccessModal';

function ProductDetail({ image, title, category, description, price }) {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const handleOnVolver = () => {
        navigate(-1);
    };

const handleAgregarAlCarrito = () => {
    if (isLoggedIn) {
      // SI está logueado muestro cartel de exito
      setIsSuccessOpen(true);
    } else {
      // si noe sta logueado lo mando a iniciar sesion
      setIsLoginOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);   
    setIsLoginOpen(false);   
    setIsSuccessOpen(true); 
  };

    return (
        <>
            <button className={styles.buttonVolver} onClick={handleOnVolver}><ArrowLeft size={24} /> Volver</button>
<div className={styles.containerProductDetail}>
            <div className={styles.cardDetail}>
                <div>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.containerInfo}>
                    <h2>{title}</h2>
                    <p className={styles.categoria}>{category}</p>
                    <p className={styles.descripcion}>{description}</p>
                    <p className={styles.precio}>${price}</p>
                                    <button className={styles.buttonAgregarAlCarrito} onClick={handleAgregarAlCarrito}> 
          Agregar al carrito
        </button>
                </div>

        </div>
            </div>
            <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess} 
      />
      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />
        </>
    );
}

export default ProductDetail;