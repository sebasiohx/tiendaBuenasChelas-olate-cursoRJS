import './CartWidget.css';
import { useNavigate } from "react-router-dom";

const CartWidget = () =>{
  let counterCartProducts = 18;

  let navigate = useNavigate();

  return(
    <button className="cartWidget btn btn-outline-secondary" onClick={()=>navigate("/cart")}>
      <i className="fas fa-shopping-cart"></i>
      <span className={`cart-counter ${counterCartProducts <= 0 ? 'd-none':''}`}>{counterCartProducts}</span>
    </button>
  );
}

export default CartWidget;