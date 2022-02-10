import './CartWidget.css';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () =>{
  const [itemsQuantityCart, setItemsQuantityCart] = useState(0);
  const {cart} = useContext(CartContext);
  let navigate = useNavigate();
  let total = 0;

  useEffect(() => {
    for (let index = 0; index < cart.length; index++) {
      total+=cart[index].quantity;
    }
    setItemsQuantityCart(total);
  }, [cart]);


  return(
    <button className="cartWidget btn btn-outline-secondary" onClick={()=>navigate("/cart")}>
      <i className="fas fa-shopping-cart"></i>
      <span className={`cart-counter ${itemsQuantityCart <= 0 ? 'd-none':''}`}>{itemsQuantityCart}</span>
    </button>
  );
}

export default CartWidget;