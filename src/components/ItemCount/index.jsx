import  "./itemCount.css";
import React, { useEffect, useState } from "react";

export const ItemCount = ({initial, stock , onAdd}) => {
    const [count , setcount] = useState(parseInt(initial))

    const decrease = () => {
        setcount (count - 1)
        
    }

    const increase = () => {
        setcount (count + 1)
    }

    useEffect (() => {
        setcount (parseInt(initial))
    } , [initial] )

    return ( 
    <div className="count">
        <button disable= {count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disable= {count >= stock} onClick={increase}>+</button>
        <div>
            <button disabled= {count <= 0} onClick= { () => onAdd(count)} >Agregar al carrito</button>
        </div>
    </div>

    );
}

export default ItemCount;