import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/index"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./cart.css"


const Cart = () => {
    const { cart, totalPrice } = useCartContext();

	const order = {
		Persona: {
            Nombre: 'Luca',
            Email: 'lbossio2003@gmail.com',
            Celular: '1130284574',
            Direccion: 'Pola 2869'
        },
        items: cart.map(product => ({ 
			id: product.id,
			titulo: product.title, 
			cantidad: product.cantidad, 
			precio: product.price 
		})),
        total: totalPrice()
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

    if (cart.length === 0) {
		return (
			<>
			
				<p className="sinElementos">No hay elementos en el carrito</p>
				<Link to="/" className="hacerCompras">Hacer compras</Link>
				
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p className="total">Total: {totalPrice()}</p>
			<Link to="/CompraRealizada" onClick={handleClick} className="hacerCompra">Finalizar compra</Link>
		</>
	);
};



export default Cart