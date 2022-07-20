
import React, { useEffect, useState } from "react";

import Title from "../title";

import ItemCount from "../ItemCount";
import Itemlist from "../Itemlist";


const books = [
    { id: 1, title: "Game of thrones", image: "https://images.cdn2.buscalibre.com/fit-in/360x360/6a/f8/6af83be126c267d082dc4bab94da8f7e.jpg" },
    { id: 2, title: "Rugby mental", image: "https://images-na.ssl-images-amazon.com/images/I/61DxiLmElOL.jpg" },
    { id: 3, title: "El señor de los anillos", image: "https://es.web.img3.acsta.net/newsv7/21/05/07/15/21/3928581.jpg" },

];




export const ItemListContainer = ({ texto }) => {
const [data , setData] = useState ([]) 

useEffect (() => {
    const getData = new Promise (resolve => {
        setTimeout (() => {
            resolve (books)
        }, 3000);
    });
    getData.then (res => setData(res));
}, [])

    const onAdd = (quantity) => {

        console.log("Realizaste una compra de " + quantity + "unidades");

    }
    return (
        <>
            <Title greeting={texto} />
            < ItemCount initial={1} stock={5} onAdd={onAdd} />
            <Itemlist data={data} />
        </>
    )
}

export default ItemListContainer
