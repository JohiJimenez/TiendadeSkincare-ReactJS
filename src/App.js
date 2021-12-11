
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/DetalleProducto/ItemDetailContainer'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from './Components/CartContext/CartContext'
import Carrito from './Components/Carrito/Carrito'

function App() {
  return (
    <div className="App">
    <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/item/:itemIdParams" element={<ItemDetailContainer />} />  
            <Route exact path="/carrito" element={<Carrito />} />
          </Routes>     
        </BrowserRouter>
      </CartProvider>
   </div>
  );
}

export default App;
