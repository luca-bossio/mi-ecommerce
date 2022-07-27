import React, { useEffect, useState } from "react";
import Title from "../title";
import ItemCount from "../ItemCount";
import Itemlist from "../Itemlist";
import { useParams } from 'react-router-dom';


const colchones = [
    { id: 1, title: "Suavestar", image: "https://ar.pinterest.com/pin/834995587139169612/" },
    { id: 2, title: "Cannon", image: "https://cannoncordoba.com.ar/" },
    { id: 3, title: "Piero", image: "https://www.grupopiero.com/" },

];




export const ItemListContainer = ({ texto }) => {
const [data , setData] = useState ([]) 

const {categoriaId} = useParams();

useEffect (() => {
    const getData = new Promise (resolve => {
        setTimeout (() => {
            resolve (colchones)
        }, 1000);
    });
    if (categoriaId) {
        getData.then (res =>  setData(res.filter(colchon => colchon.category === categoriaId) ));
    } else {
    getData.then (res => setData(res));
    }
}, [categoriaId])

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
