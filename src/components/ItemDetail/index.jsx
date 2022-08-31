import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./itemDetail.css";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';

export const Itemdetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext ();

    const onAdd = (quantity) => {

        setGoToCart(true);
        addProduct(data,quantity);

        console.log(quantity)
    }

   
    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <h2>${data.price}</h2>
                    {


                        goToCart
                            ? <Link to={'/Tienda'}>Finalizar compra</Link>
                            : < ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Itemdetail;