import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div >
                <p  className='tituloProd' >Título: {product.title}</p>
                <p  className='tituloProd' >Cantidad: {product.cantidad}</p>
                <p  className='tituloProd' >Precio: ${product.price}</p>
                <p  className='tituloProd' >Subtotal: ${product.cantidad * product.price}</p>
                <button onClick={() => removeProduct(product.id)} className="borrar">Borrar compra</button>
            </div>
        </div>
    )
}

export default ItemCart 