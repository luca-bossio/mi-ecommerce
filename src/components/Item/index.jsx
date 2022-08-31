import "./item.css";
import React  from "react";
import { Link } from 'react-router-dom';
import "../Css/main.css"


const Item = ({info}) => {
   
<h1 className="titulo">Pulse el colchon que quiere:</h1>
    return (
   
        <>
        <Link to={`/detalle/${info.id}`} className="Colchones"> 
            <h2 className="tituloColchon">{info.title}</h2>
            <img src={info.image} alt="DW" width="80%"/>
        </Link>
        </>
    )
}

export default Item

