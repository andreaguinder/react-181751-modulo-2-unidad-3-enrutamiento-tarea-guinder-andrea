import React from 'react';
import styles from '../styles/Pages.module.scss';

function Checkout() {
  return (
    <div className={styles.checkout}>
      <h2>¡Llegaste al Checkout!</h2>
      <p>Esta es una vista protegida. Solo podés ver esto si estás logueado/a.</p>
    </div>
  );
}

export default Checkout;