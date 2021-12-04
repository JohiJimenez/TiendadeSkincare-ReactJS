
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/DetalleProducto/ItemDetailContainer'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from './Components/Carrito/Carrito';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/item/:itemIdParams" element={<ItemDetailContainer />} />  
          <Route path="/carrito" element={<Carrito/>} />         
        </Routes>     
      </BrowserRouter>
   </div>
  );
}

export default App;
