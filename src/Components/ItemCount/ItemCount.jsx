import React from 'react'
import {useState} from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    
 
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
        onAdd (count)
        setCount (1)
    }

   
    return (
       <>
        <button className= "agregar" onClick={Sumar}>+</button>
                 {count}
        <button className= "disminuir" onClick={Restar}>-</button>
        <Link to={`/carrito/`}>
        <button onClick={AgregarProducto}> Agregar al Carrito</button>
        </Link> 
          
       </>
    );
}

export default ItemCount
