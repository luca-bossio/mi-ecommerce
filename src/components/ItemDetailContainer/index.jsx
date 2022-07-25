import React, { useEffect, useState } from "react";
import Itemdetail from "../ItemDetail";



const book = [
    { id: 2, title: "Rugby mental", image: "https://images-na.ssl-images-amazon.com/images/I/61DxiLmElOL.jpg" },
];


export const ItemdetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(book);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])


    return (
        <Itemdetail data={data} />
    );
}

export default ItemdetailContainer;