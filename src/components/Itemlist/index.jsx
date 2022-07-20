import Item from "../Item";
import React from "react";

const Itemlist = ({data=[]}) => {
    return (
      data.map(book =>  <Item key={book.id} info={book} />)
    )
}

export default Itemlist;