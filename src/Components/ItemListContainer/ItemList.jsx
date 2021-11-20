import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState, useEffect} from 'react';
import getFetch from '../../helpers/getFetch'
import '../ItemCount/ItemCount.css'

function ItemList(props) {

    const [productos, setProductos]= useState ([])
    const [loading, setLoading] = useState (true)
    
    useEffect (() => {
      getFetch
      .then(datos => {
        setProductos (datos)
    })
    
    .finally (() => setLoading (false))
  
    return () => {
  
       }
    }, [])
    function onAdd (cantidad){
        console.log(cantidad)

    }
    return (
        <div>
            {loading ? <h1>Se Esta Cargando.....</h1> : productos.map(prod => <div key={prod.id} className="card w-50 mt-5" >
             
             <div className= "Item">
               <h4>{prod.nombre}</h4>
               <h5>  Precio: {prod.precio}</h5>
               <img src={prod.img} alt="" style= {{width:200 , height:200}}/>
               <ItemCount initial={1} stock={prod.stock} onAdd= {onAdd} />
             </div>
                   
         </div> 
         )}  
        </div>
    )
}

export default ItemList
