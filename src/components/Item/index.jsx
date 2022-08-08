import "./item.css";
import React  from "react";
import { Link } from 'react-router-dom';


const Item = ({info}) => {
   

    return (
        <Link to={`/detalle/${info.id}`} className="colchon">
            <img src={info.image} alt="DW" />
            <p>{info.title}</p>
        </Link>
    )
}

export default Item

