import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const ProductCard = ( { id, image, title, price }) => {

    
    return (

        <div className={styles.productCard}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>

            <Link className={styles.productCardButton} to={`/producto/${id}`}>Ver detalle</Link>
        </div>

    );
}

export default ProductCard;