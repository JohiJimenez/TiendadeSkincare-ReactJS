import React from 'react'
import Producto from '../Producto/Producto'

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <Producto nombre="Niacinamida" precio= "6000" img="https://th.bing.com/th/id/R.6d60ac91171ab6c0311ddd80fb5e340a?rik=3l%2f4Vx3dZwrPxA&pid=ImgRaw&r=0" />
            <Producto nombre="Acido Ascorbico" precio="4000" img="https://images.asos-media.com/products/the-ordinary-soluzione-al-15-di-acido-ascorbico-etilato/10508076-1-nocolour?$XXL$&wid=513&fit=constrain" />
        </div>
    )
}

export default ItemListContainer
