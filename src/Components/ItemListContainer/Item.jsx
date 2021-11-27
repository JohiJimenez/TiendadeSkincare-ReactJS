//Info de cada Producto

import React from 'react'
import ItemCount from '../ItemCount/ItemCount'



function Item({item}) {
    function onAdd (cantidad){
        console.log(cantidad)

    }
    return (
            <div className= "Item">
               <h4>{item.nombre}</h4>
               <h5>  Precio: {item.precio}</h5>
               <img src={item.img} alt="" style= {{width:200 , height:200}}/>
               <ItemCount initial={1} stock={item.stock} onAdd= {onAdd} />
             </div>

    )
}

export default Item

