import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <h1>Tienda de Skincare</h1>
            <ul> 
                <li   className="navBar">
                    <Link to= "/">Inicio</Link>
                </li>
                <li  className="navBar">
                  <Link to= "/categoria/marcas">Marcas</Link>
                </li>
                <li  className="navBar">
                <Link to= "/carrito">Carrito</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar

