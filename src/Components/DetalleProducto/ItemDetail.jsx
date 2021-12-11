import React from 'react';
import ItemCount from '../ItemCount/ItemCount';




export const ItemDetail = ({item}) => {
  

    return ( 
        <div className="Item">

            <h4>{item.nombre}</h4>
            <h5>  Precio: {item.precio}</h5>
            <p>{item.descripcion}</p>
            <img src={item.img} alt="" style={{ width: 200, height: 200 }} />
            <ItemCount initial={1} stock={item.stock} item={item} />   
        </div>
                
    )
}


