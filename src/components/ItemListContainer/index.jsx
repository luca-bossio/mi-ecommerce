import React, { useEffect, useState } from "react";
import Title from "../title";
import Itemlist from "../Itemlist";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where  } from "firebase/firestore";



export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([])

   

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Colchones");
        
            
            getDocs(queryCollection).then((res) =>
                setData(
                    res.docs.map((colchones) => ({ id: colchones.id, ...colchones.data() })),
                ),
            );
        
    }, [])


    return (
        <>
            <Title greeting={texto} />
            <Itemlist data={data} />
        </>
    )
}

export default ItemListContainer
