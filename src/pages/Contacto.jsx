import React, { useState } from 'react';
import styles from '../styles/Pages.module.scss';
import SuccessModalForm from '../components/SuccessModalForm/SuccessModalForm';

const Contacto = () => {
const [isSuccessOpen, setIsSuccessOpen] = useState(false);

const handleEnviarForm = (e) => {
    e.preventDefault();

    setIsSuccessOpen(true);
e.target.reset();
  };

    return (
        <>

        <div className={styles.containerGeneral}>
            <h1>Contacto</h1>
            <form className={styles.formularioContacto} onSubmit={handleEnviarForm}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>

                <button type="submit" className={styles.btnForm} >
                    Enviar
                </button>
            </form>
        </div>

              <SuccessModalForm 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />
        </>
    );
}

export default Contacto;