import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <nav>
            <h1>Tienda de Skincare</h1>
            <ul> 
                <li   className="navBar">
                    <a href="index.html">Inicio</a>
                </li>
                <li  className="navBar">
                    <a href="marcas.html">Marcas</a>
                </li>
                <li  className="navBar">
                    <a href="contacto.html">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar

