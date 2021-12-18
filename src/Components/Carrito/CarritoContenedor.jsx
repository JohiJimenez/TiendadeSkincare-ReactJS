import React from 'react'
import {useContext} from 'react'
import CartContext from '../CartContext/CartContext'
import Carrito from '../Carrito/Carrito'

function CarritoContenedor() {
    const [carrito] = useContext (CartContext)
    return (
        carrito.length ===0 ? "Carrito Vacio" : <Carrito/>
    )    
}

export default CarritoContenedor
