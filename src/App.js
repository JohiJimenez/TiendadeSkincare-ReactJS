
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting = "Productos de La tienda"/>       
    </div>
  );
}

export default App;
