//import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import FinalMessage from "./Pages/FinalMessage";
import { CartProvider } from "./context/CartContext";
//import { getFirestore } from "./firebase";

function App() {
  /* const PRODUCTS= [
    {
      title: "Royal Guard",
      description: "Dos Lúpulos finamente seleccionados hacen de la receta de Royal Guard algo único. Uno para darle su característico aroma y el otro para que su sabor tenga el amargor justo.",
      price: 17900,
      pictureUrl: "https://odoo.kub.cloudccu.cl/web/image?model=product.product&id=2499&field=image_256",
      category: "nacional",
      stock:9
    },
    {
      title: "Cristal",
      description: "Cristal es una cerveza lager refrescante y de cuerpo balanceado que representa con orgullo la tradición cervecera chilena desde 1850.",
      price: 8590,
      pictureUrl: "https://odoo.kub.cloudccu.cl/web/image?model=product.product&id=2269&field=image_256",
      category: "nacional",
      stock:18
    },
    {
      title: "Escudo Silver",
      description: "Su cuerpo redondo, color dorado brillante, sabor intensamente refrescante y 5° de alcohol, hacen de esta nueva variedad una cerveza con carácter y que al mismo tiempo es muy fácil de tomar.",
      price: 9900,
      pictureUrl: "https://odoo.kub.cloudccu.cl/web/image?model=product.product&id=2258&field=image_256",
      category: "importada",
      stock:4
    },
    {
      title: "Imperial Lager",
      description: "Cerveza de estilo clásico y color dorado. En nariz presenta aromas a malta y pan horneado. En boca se muestra fresca pero con amplitud, 100% malta",
      price: 12300,
      pictureUrl: "https://odoo.kub.cloudccu.cl/web/image?model=product.product&id=2497&field=image_256",
      category: "importada",
      stock:5
    }
  ];

  const db = getFirestore();
  const collection = db.collection("beers");

  const createProductOnFirestore = () => {
    PRODUCTS.forEach((product)=> {
      collection.add(product).then((res)=> console.log("Producto agregado:", res.id)).catch((err)=> console.log("Hubo un problema:", err));
    });
  }; */

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