import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const URL = `http://localhost:3001/products/${id}`;
  const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(fetch(URL)), 2000);
    });
  }

  useEffect(() => {
    setIsLoading(true);

    getProductos()
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
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