import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import styles from './SuccessModal.module.scss';

function SuccessModal({ isOpen, onClose }) {

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleGoToCheckout = () => {
    onClose(); 
    navigate('/checkout'); 
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <div className={styles.iconContainer}>
          <CheckCircle size={56} className={styles.successIcon} />
        </div>
        
        <h2>¡Agregado al carrito!</h2>
        <p>Tu producto se guardó correctamente.</p>

        <div className={styles.buttonGroup}>
          <button className={styles.secondaryButton} onClick={onClose}>
            Seguir comprando
          </button>

          <button className={styles.primaryButton} onClick={handleGoToCheckout}>
            Ir al checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;