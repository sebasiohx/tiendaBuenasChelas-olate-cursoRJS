import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId } = useParams();
  const URL = 'http://localhost:3001/products';

  console.log(categoryId);

  useEffect(() => {
    setIsLoading(true);

    if (categoryId) {
      setTimeout(() => {
        fetch(URL)
          .then((response) => response.json())
          .then((data) => setProducts(data.filter((item) => item.category == categoryId)))
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false));
      }, 2000);
    } else {
      setTimeout(() => {
        fetch(URL)
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false));
      }, 2000);
    }
  }, [categoryId]);

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