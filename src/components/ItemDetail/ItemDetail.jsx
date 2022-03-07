import { useState, useContext, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [itemsCountToCart, setItemsCountToCart] = useState(0);
  const { addItem } = useContext(CartContext); //Consumer

  const onAdd = (quantityToAdd) => {
    if (item.stock > 0) {
      setItemsCountToCart(quantityToAdd);
    }

    addItem({
      id: item.id,
      name: item.title,
      price: item.price,
      img: item.pictureUrl
    }, quantityToAdd);
  };

  return (
    <div className="jumbotron shadow">
      <h2 className="display-4">Cerveza {item.title}</h2>
      <hr className="my-4" />
      <p className="lead">{item.description}</p>
      <div className="row">
        <div className="col-md-6">
          <img src={item.pictureUrl} alt={item.title} style={{margin: '0 auto', display: 'block'}}/>
        </div>
        <div className="col-md-6">
          <h3 style={{fontSize: '50px', marginTop: '40px', marginBottom: '32px'}}>{'$' + item.price}</h3>
          {itemsCountToCart > 0 ? (
            <div>
              <Link className="btn btn-outline-primary mr-3" to="/">Seguir Comprando</Link>
              <Link className="btn btn-primary" to="/cart">terminar mi compra</Link>
            </div>
          ) : (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;