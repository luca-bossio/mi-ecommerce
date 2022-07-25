import "./item.css";
import React from "react";

const Item = ({info}) => {
    return (
        <a href="" className="books">
            <img src={info.image} alt="DW" />
            <p>{info.title}</p>
        </a>
    )
}

export default Item

