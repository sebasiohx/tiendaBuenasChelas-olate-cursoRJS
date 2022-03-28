//import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import FinalMessage from "./Pages/FinalMessage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container">
          {/* <div>
            <button style={{margin: "15px auto", display: "block"}} onClick={createProductOnFirestore}>Agregar productos</button>
          </div> */}
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="thanks/:orderId" element={<FinalMessage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;