//Info de cada Producto

import React from 'react'

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
               <img src={item.img} alt="" style= {{width:200 , height:200}}/>
           </div>

    )
}

export default Item

