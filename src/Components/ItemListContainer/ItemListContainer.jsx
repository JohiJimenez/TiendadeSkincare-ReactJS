//Ejecutar Promesa
import {useState, useEffect} from 'react';
import {ListaDeProductos} from '../ListaDeProductos/ListaDeProductos'
import ItemList from './ItemList'


const ItemListContainer = () =>{

    //Seteamos la lista de Productos y el Loading
    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
   
    //Hacemos nuestra Promesa
      useEffect(() => {
          const getFetch = new Promise ((resolve, reject)=> {
              setTimeout(()=> {
                  resolve(ListaDeProductos)
              }, 2000)
          })
    getFetch.then(productos => {
      setProductos (productos)
  })
  .finally (() => setLoading (false))
  }, [])

//Mensaje de Cargando mientras se ejecuta la Promesa y Luego enviamos la Lista de Productos al Componente ItemList

    return(
    <>
        <div>
            {loading ? <h1>Se Esta Cargando.....</h1> : <ItemList lista={productos}/>}
        </div>
    </>
    )
    };

export default ItemListContainer