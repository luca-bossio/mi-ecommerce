import React, { useEffect, useState } from "react";
import Itemdetail from "../ItemDetail";
import { useParams } from 'react-router-dom';



const colchones = [
    { id: 1, price:30000 ,title: "Suavestar", image: "https://ar.pinterest.com/pin/834995587139169612/" },
    { id: 2, price:35000 ,title: "Cannon", image: "https://cannoncordoba.com.ar/" },
    { id: 3, price:40000 ,title: "Piero", image: "https://www.grupopiero.com/" },

];

export const ItemdetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(colchones);
            }, 3000);
        });
        getData.then (res =>  setData(res.find(colchones => colchones.id === parseInt (detalleId) )));
        
    }, [])


    return (
        <Itemdetail data={data} />
    );
}

export default ItemdetailContainer;