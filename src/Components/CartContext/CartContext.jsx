
import {useState,createContext} from 'react'

    const CartContext = createContext ();

    export const CartProvider = (props) => {
    
        const [carrito, setCarrito]=useState ([]);
     
    return (
        <CartContext.Provider value = {[carrito, setCarrito]}>
            {props.children}
        </CartContext.Provider>
    )

    }
export default CartContext
