import { useState, useEffect } from "react/cjs/react.development";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item })=>{
  const [itemsCountToCart, setItemsCountToCart] = useState(0);

  let onAdd = (quantityToAdd)=>{
    if(item.stock > 0){
      setItemsCountToCart(quantityToAdd);
    }
  }

  return (
    <div className="jumbotron">
      <h2 className="display-4">{item.title}</h2>
      <p className="lead">{item.description}</p>
      <hr className="my-4" />
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{'$'+item.price}</h3>
      {itemsCountToCart > 0 ? (
        <Link className="btn btn-primary" to="/cart">terminar mi compra</Link>
      ) : (
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
}

export default ItemDetail;