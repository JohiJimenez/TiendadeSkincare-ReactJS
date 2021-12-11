import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'


function NavBar() {
    return (
        <nav>
            <h1>Tienda de Skincare</h1>
            <ul> 
                <li   className="navBar">
                    <Link to= "/">Inicio</Link>
                </li>
                <li  className="navBar">
                  <Link to= "/marcas">Marcas</Link>
                </li>
                <li  className="navBar">
                <Link to= "/carrito">
                    <CartWidget/>
                </Link>
                </li>  
            
            </ul>
        </nav>
    )
}

export default NavBar

