
import React from "react";

import Title from "../title";

import ItemCount from "../ItemCount";

export const ItemListContainer = ({ texto }) => {
    return (
        <>
        <Title greeting={texto} />
        < ItemCount />
        </>
    )
}

export default ItemListContainer
