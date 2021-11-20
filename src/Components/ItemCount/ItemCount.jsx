import React from 'react'
import {useState, useEffect} from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    useEffect(() => {
        console.log ('tarda')
    }, [])


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
        <button onClick={AgregarProducto}> Agregar al Carrito</button>

       </>
    );
}

export default ItemCount
