import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const productsCollection = db.collection("beers");
    const selectedProduct = productsCollection.doc(id);

    //Obetener datos mediante 'then'
    selectedProduct.get().then((response) => {
      if(!response.exists) {console.log("El producto no existe");}
      setProduct({...response.data(), id: response.id});
    }).finally(()=>setIsLoading(false));
  }, [id]);

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