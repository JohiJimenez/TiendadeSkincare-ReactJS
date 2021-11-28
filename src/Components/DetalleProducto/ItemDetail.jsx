import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({item}) => {
    console.log('este es el prop de item')
    console.log(item)

    return (
        
         <div>
            <p>{item.descripcion}</p>
            <ItemCount stock={item.stock} id={item.id} />
        </div>
                
    )
}
