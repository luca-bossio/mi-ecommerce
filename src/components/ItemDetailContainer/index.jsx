import React, { useEffect, useState } from "react";
import Itemdetail from "../ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";



export const ItemdetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", detalleId);
        getDoc(queryDoc)
            .then((res) => setData({ id: res.id, ...res.data() }));
    }, [detalleId])


    return (
        <Itemdetail data={data} />
    );
}

export default ItemdetailContainer;