import Item from "../Item";
import React from "react";

const Itemlist = ({data=[]}) => {
    return (
      data.map(colchon =>  <Item key={colchon.id} info={colchon} />)
    )
}

export default Itemlist;