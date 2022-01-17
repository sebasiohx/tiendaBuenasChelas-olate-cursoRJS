import './CartWidget.css';

const CartWidget = () =>{
  let counterCartProducts = 18;

  return(
    <button className="cartWidget btn btn-outline-secondary">
      <i className="fas fa-shopping-cart"></i>
      <span className={`cart-counter ${counterCartProducts <= 0 ? 'd-none':''}`}>{counterCartProducts}</span>
    </button>
  );
}

export default CartWidget;