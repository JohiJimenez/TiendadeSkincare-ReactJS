import React from 'react'
import "./Producto.css"

function producto(props) {
    
    return (
        <div className= "producto">
            <h2>{props.nombre}</h2>
            <h2>Precio: {props.precio}</h2>
            <img src={props.img} alt="" style= {{width:200 , height:200}}/>
        </div>

    )
}

export default producto
