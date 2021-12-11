import CartContext from '../CartContext/CartContext'
import {useContext} from 'react'
import './Carrito.css'

import React from 'react'

function Carrito() {
    const [carrito] = useContext (CartContext)
    console.log (carrito)
    let total= 0;
    return (
            <div className= "list-group">
                  <h1> Aqui va el Carrito:</h1>
                <ul>
                    {
                        carrito.map((prod,index) => {
                        total= total+ (prod.precio * prod.cantidad)
                        return (
                         <li className= 'list-group-item' key={index} > {prod.nombre}  {prod.cantidad} {prod.precio * prod.cantidad}</li>   
                        
                         )})
                    }
                     
                </ul> 
               
                <h2> Total a Pagar ${total}</h2>
            </div>
            
     
    )
}

export default Carrito
