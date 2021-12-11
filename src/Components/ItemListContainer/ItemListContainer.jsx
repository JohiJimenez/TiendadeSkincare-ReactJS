//Ejecutar Promesa
import {useState, useEffect} from 'react';
//import {ListaDeProductos} from '../ListaDeProductos/ListaDeProductos'
import ItemList from './ItemList'
import getFirestore from '../../Firebase/firebase'

const ItemListContainer = () =>{

    //Seteamos la lista de Productos y el Loading
    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
   
    //Hacemos nuestra Promesa y Capturamos la lista de Productos
      useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('productos')
        dbQuery.get()
        .then(data => setProductos(data.docs.map( item=> ( {id: item.id, ...item.data()} ))))
  },[])
console.log (productos)
 
//Mensaje de Cargando mientras se ejecuta la Promesa y Luego enviamos la Lista de Productos al Componente ItemList

    return(
    <>
        <div>
          <ItemList lista={productos}/>    
     </div>
    </>
    )
    }

export default ItemListContainer