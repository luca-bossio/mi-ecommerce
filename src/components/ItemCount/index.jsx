import  "./itemCount.css";
import React, { useState } from "react";

export const ItemCount = () => {
    const [count , setcount] = useState(1)

    const decrease = () => {
        setcount (count - 1)
        
    }

    const increase = () => {
        setcount (count + 1)
    }

    return ( 
    <div className="count">
        <button onClick={decrease}>-</button>
        <span>2</span>
        <button onClick={increase}>+</button>
        <div>
            <button>Agregar al carrito</button>
        </div>
    </div>

    );
}

export default ItemCount;