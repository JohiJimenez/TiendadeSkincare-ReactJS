import React from 'react'
import './ItemCount.css'
import {useState, useContext} from 'react'
import CartContext from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
   
    const ItemCount = ({initial, stock, onAdd, item}) => {
        
        const [count, setCount] = useState(initial)
        const [carrito, setCarrito] = useContext (CartContext)
    
    
        function Sumar (){
            if (count<stock){
                setCount (count+1)
            }
        }
    
        function Restar (){
            if (count>1){
                setCount (count-1)
            }
    
        }

    
        function AgregarProducto (){
            const temporal = carrito
            temporal.push ({id: item.id, nombre: item.nombre, precio:item.precio, cantidad: count})
            setCarrito (temporal)          
         }
    
        return (
           <>
            <button className= "agregar" onClick={Sumar}>+</button>
                     {count}
            <button className= "disminuir" onClick={Restar}>-</button>
            <Link to={`/carrito`}>
                <button onClick={AgregarProducto}> Agregar al Carrito</button>
            
            </Link>
           </>
        );
    }

export default ItemCount
