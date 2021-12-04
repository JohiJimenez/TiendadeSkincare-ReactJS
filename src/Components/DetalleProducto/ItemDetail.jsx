import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {useState,useContext} from 'react'
import {CartContext} from '../CartContext/CartContex'


export const ItemDetail = ({item}) => {
    const initial=1
    const [count, setCount] = useState(initial)
    const [carrito, setCarrito] = useContext(CartContext)
   
    function Sumar (){
        if (count<(item.stock)){
            setCount (count+1)
        }
    }

    function Restar (){
        if (count>1){
            setCount (count-1)
        }

    }
    function AgregarProducto (){
        console.log (count)
        setCount(1)
        console.log(item)
        const temporal = carrito;
        temporal.push(item);
        setCarrito (temporal);
        console.log (carrito)

    }

    return ( 
        <div className="Item">

            <h4>{item.nombre}</h4>
            <h5>  Precio: {item.precio}</h5>
            <p>{item.descripcion}</p>
            <img src={item.img} alt="" style={{ width: 200, height: 200 }} />
            <ItemCount initial={1} stock={item.stock}/>   
             <button onClick={AgregarProducto}> Agregar al Carrito</button>
             <button className= "agregar" onClick={Sumar}>+</button>
                 {count}
        <button className= "disminuir" onClick={Restar}>-</button>
        </div>
                
    )
}
