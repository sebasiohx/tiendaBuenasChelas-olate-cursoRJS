import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const {removeItem} = useContext(CartContext);
  return (
    <div className="card d-flex flex-row">
      <img src={item.item.img} className="card-img-top" style={{ maxHeight: '150px', width: 'auto' }} alt={item.item.name} />
      <div className="card-body">
        <h4 className="card-title">{item.item.name}</h4>
        <p className="card-text">Precio: ${item.item.price}</p>
        <p className="card-text">Cantidad: {item.quantity}</p>
        <button className="btn btn-outline-secondary" onClick={()=>removeItem(item.item.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default CartItem;