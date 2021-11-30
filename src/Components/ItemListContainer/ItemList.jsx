//Mapeo
//Mapeo el array de productos y se lo paso de a uno a item

import React from 'react'
import Item from './Item'

function ItemList(props) {
    console.log (props.lista)
    
    return (
             <div style={{ width: '100%' }}>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </div>

    )
}

export default ItemList
