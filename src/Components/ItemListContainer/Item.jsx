//Info de cada Producto

import React from 'react'
import { Link } from 'react-router-dom'
import ItemDetailContainer from '../DetalleProducto/ItemDetailContainer'

function Item({item}) {
  
    return (
            <div className= "Item">
               <h3>{item.nombre}</h3>
               <Link to={`/item/${item.id}`}>
                  <button className= "btn btn-primary">
                     Detalle 
                  </button>
               </Link>
                 <img src={item.img} alt={item.nombre} style= {{width:200 , height:200}} />
            </div>
           
    )
}



export default Item

