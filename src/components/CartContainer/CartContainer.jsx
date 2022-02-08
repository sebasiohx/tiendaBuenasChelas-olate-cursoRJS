import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer = ()=>{
  const cartData = useContext(CartContext);

  //imprimo momentaneamente el listado del carrito
  console.log(cartData.cart);


  return(
    <h2>Este es el Cart Container</h2>
  );
}

export default CartContainer;