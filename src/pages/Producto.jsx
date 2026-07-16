import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Loader from '../components/Loader/Loader';

function Producto() {
    const { id } = useParams(); 
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducto(data))
            .catch(err => console.error("Error al traer el detalle:", err));
    }, [id]);


    if (!producto) return <Loader/>;

    return (
        <ProductDetail
            title={producto.title}
            image={producto.image}
            category={producto.category}
            description={producto.description}
            price={producto.price}
        />
    );
}

export default Producto;