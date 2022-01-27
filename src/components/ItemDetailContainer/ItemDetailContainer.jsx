import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import ItemDetail from "../ItemDetail/ItemDetail";

const URL = 'http://localhost:3001/products';
const getProductos = (itemId)=> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(fetch(`${URL}/${itemId}`)), 2000);
  });
}

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductos(3)
        .then((response) => response.json())
        .then((json) => setProduct(json))
        .catch((error) => console.error(error))
        .finally(()=> setIsLoading(false));
  }, []);

  return (
    <div className="row">
      {isLoading ? (
        <div className="col-12">
          <h1 className="text-center mt-5">Cargando...</h1>
        </div>
      ) : (
        <ItemDetail item={product} />
      )}
    </div>
  );
}

export default ItemDetailContainer;