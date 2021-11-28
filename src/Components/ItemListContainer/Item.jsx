//Info de cada Producto

import React from 'react'
import { Link } from 'react-router-dom'

function Item({item}) {

const funcionClick =(producto) => {
   console.log (`click ${item}`)
}

  console.log (item)
    return (
            <div className= "Item">
               <h3>{item.nombre}</h3>
               <button className= "btn btn-primary" 
               onClick={() => funcionClick `${item}` }>
                Detalle
               </button>
               <Link to={`/item/${item.id}`}>
                  <img src={item.img} alt={item.nombre} style= {{width:200 , height:200}} />
               </Link>
           </div>

    )
}


export default Item

