import React, { useEffect, useState } from "react";
import Itemdetail from "../ItemDetail";
import { useParams } from 'react-router-dom';



const colchon = [
    { id: 1, title: "Suavestar", image: "https://ar.pinterest.com/pin/834995587139169612/" },
];


export const ItemdetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(colchon);
            }, 3000);
        });
        getData.then (res =>  setData(res.find(colchon => colchon.id === parseInt (detalleId) )));
        
    }, [])


    return (
        <Itemdetail data={data} />
    );
}

export default ItemdetailContainer;