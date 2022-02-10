import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, addItem, isInCart } = useContext(CartContext);
  let navigate = useNavigate();

  let total = 0;
  for (let index = 0; index < cart.length; index++) {
    total += (cart[index].item.price*cart[index].quantity);
  }

  if (cart.length == 0) {
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="mb-5">Carrito de compras</h1>
          <h2>El carrito esta vacio, si quieres puedes ver el catálogo</h2>
          <button className="btn btn-primary" onClick={() => navigate("/")}>Ver catálogo</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row pb-5">
        <div className="col-12">
          <h1>Carrito de compras</h1>
        </div>

        {cart.map((product) =>
          <div className="col-4 my-3">
            <CartItem item={product} />
          </div>
        )}

        <div className="col-12">
          <h2><strong>Total:</strong> $ {total}</h2>
          <br />
          <button className="btn btn-outline-primary mt-2 mr-3" onClick={() => navigate("/")}>Seguir Comprando</button>
          <button className="btn btn-primary mt-2">Ir a pagar</button>
        </div>
      </div>
    );
  }

}

export default Cart;