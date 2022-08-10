import React, { useEffect, useState } from "react";
import Title from "../title";
import Itemlist from "../Itemlist";
import { useParams } from 'react-router-dom';
import { collection, getDoc, getFirestore } from "firebase/firestore";



export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([])

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products");
        if (categoriaId) {
            const queryFilter = query(
                queryCollection,
                where("id", "==", categoriaId),
            );
            getDocs(queryFilter).then((res) =>
                setData(
                    res.docs.map((colchones) => ({ id: colchones.id, ...colchones.data() })),
                ),
            );
        } else {
            getDocs(queryCollection).then((res) =>
                setData(
                    res.docs.map((colchones) => ({ id: colchones.id, ...colchones.data() })),
                ),
            );
        }
    }, [categoriaId])


    return (
        <>
            <Title greeting={texto} />
            <Itemlist data={data} />
        </>
    )
}

export default ItemListContainer
