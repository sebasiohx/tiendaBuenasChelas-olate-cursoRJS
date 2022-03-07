import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    let productsCollection;
    if(categoryId){
      productsCollection = db.collection("beers").where("category", "==", categoryId);
    } else {
      productsCollection = db.collection("beers").orderBy("category", "desc")
    }

    //Obetener datos mediante 'async' y 'await'
    const getDataFromFirestore = async ()=> {
      const response = await productsCollection.get();

      if(response.empty){
        console.log("No hay productos");
      }
      setProducts(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
      setIsLoading(false);
    };

    getDataFromFirestore();
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