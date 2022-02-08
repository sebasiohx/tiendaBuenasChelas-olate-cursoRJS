import { useState, useEffect } from "react/cjs/react.development";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item })=>{
  const [itemsCountToCart, setItemsCountToCart] = useState(0);
  const {addItem, isInCart, addQuantity} = useContext(CartContext); //Consumer

  const onAdd = (quantityToAdd)=>{
    if(item.stock > 0){
      setItemsCountToCart(quantityToAdd);
    }

    if(isInCart(item.id)){
      //si existe, solo le suma la cantidad al item
      addQuantity(item.id, quantityToAdd);
    } else {
      //si no existe, crea un item nuevo
      addItem({
        id: item.id,
        name: item.title,
        price: item.price
      }, quantityToAdd);
    }
  };

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