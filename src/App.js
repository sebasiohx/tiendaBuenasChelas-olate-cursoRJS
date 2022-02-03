//import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContainer from "./components/CartContainer/CartContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar />
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;