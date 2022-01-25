import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const URL = 'http://localhost:3001/products';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(()=> {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => setProducts(json))
        .catch((error) => console.error(error))
        .finally(()=> setIsLoading(false));
    }, 2000)
  }, []);

  return (
    <div className="row">
      {isLoading ? (
        <div className="col-12">
          <h1 className="text-center mt-5">Cargando...</h1>
        </div>
      ) : (
        <ItemList items={products} />
      )}
    </div>
  );
}

export default ItemListContainer;