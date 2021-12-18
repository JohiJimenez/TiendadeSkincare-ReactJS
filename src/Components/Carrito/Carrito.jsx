import CartContext from '../CartContext/CartContext'
import {useContext} from 'react'
import './Carrito.css'
import { Link } from 'react-router-dom'

import React from 'react'
import CarritoContenedor from './CarritoContenedor'



function Carrito() {
    const [carrito, setCarrito] = useContext (CartContext)
    console.log (carrito)
    let total= 0

    function vaciarCarrito ()  {
        setCarrito([]);
         
    }  
    function borrarItem() {
            const index = carrito.findIndex(element => element.id === carrito.id)
            carrito.splice(index, 1)
            console.log (carrito)
            console.log ('se borro un item del Carrito')
            let aux= carrito; 
            setCarrito(aux)
             
          }
      
    return(
        <>
        <div className= "list-group">
            <ul>
                {
                    carrito.map((prod,index) => {
                    total= total+ (prod.precio * prod.cantidad)
                    return (
                    <><li className='list-group-item' key={index}>
                            {prod.nombre}  {prod.cantidad} {prod.precio * prod.cantidad}
                    </li>
                      <button onClick={borrarItem}> Borrar </button>
                    
                    </>
                     )})
                }
            </ul> 
            <h2> Total a Pagar ${total}</h2>
            <button onClick ={vaciarCarrito}> Vaciar Carrito</button>  

        </div>  
      </>
        )		
}
           
            
 
export default Carrito
