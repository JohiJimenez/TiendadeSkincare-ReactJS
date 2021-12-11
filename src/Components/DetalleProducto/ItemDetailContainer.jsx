import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../DetalleProducto/ItemDetail';
import getFirestore from '../../Firebase/firebase';

const ItemDetailContainer = () =>{

      const [productoIndividual, setProductoIndividual]= useState({});
     // const [loading, setLoading] = useState(true);
     // const { itemIdParams } = useParams(); 
    
        useEffect(() => {
            const db = getFirestore()
            const dbQuery = db.collection('productos').doc('51DCO6sY142gtXnv3NiY')
            dbQuery.get()
            .then(resp => setProductoIndividual({id: resp.id, ...resp.data()}))
        }, [])

    return(
    <>
       <div>
            <ItemDetail item={productoIndividual}/>
        </div>
    </>
    )
}

export default ItemDetailContainer