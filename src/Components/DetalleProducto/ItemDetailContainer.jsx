import React from 'react';
import { useEffect, useState } from 'react';
import { ListaDeProductos } from '../ListaDeProductos/ListaDeProductos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../DetalleProducto/ItemDetail';

const ItemDetailContainer = () =>{

      const [productoIndividual, setProductoIndividual]= useState({});
      const [loading, setLoading] = useState(true);
      const { itemIdParams } = useParams(); 
    
        useEffect(() => {
            const promesaIndividual = new Promise ((resolve, reject)=> {
                setTimeout(()=> {
                    resolve(ListaDeProductos.find(producto => producto.id == itemIdParams)) 
                }, 2000)
            })
            promesaIndividual.then((prodEncontrado)=>{
                console.log('OK');
                setProductoIndividual(prodEncontrado) //prodEncontrado es un objeto! recuerden
            })
              .catch((error)=>{
                  console.log('ERROR');
              })
              .finally(()=>{
                  setLoading(false)
              }
              )
          }, [itemIdParams])
  

    return(
    <>
       <div>
            {loading ? <h1>Está ejecutandose Promesa del detalle</h1> 
                : 
            <ItemDetail item={productoIndividual}/> }
            </div>
    </>
    )
    };

export default ItemDetailContainer