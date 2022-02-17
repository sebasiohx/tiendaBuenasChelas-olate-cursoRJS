import { createContext, useState } from "react";

//Context
export const CartContext = createContext([]);

//Custom provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    if (cart.find((product) => product.item.id == id)) {
      return true;
    } else {
      return false;
    }
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      addQuantity(item.id, quantity);
    } else {
      let newItem = { item, quantity };
      setCart((cart) => [...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    if (isInCart(id)) {
      let item = cart.find((product) => product.item.id == id);
      let indexItemCart = cart.indexOf(item);
      let pseudoCart = cart;
      pseudoCart.splice(indexItemCart, 1);
      setCart([...pseudoCart]);
    }
  };

  const addQuantity = (id, quantity) => {
    let item = cart.find((product) => product.item.id == id);
    item.quantity += quantity;
    let indexItemCart = cart.indexOf(item);
    let pseudoCart = cart;
    pseudoCart[indexItemCart] = item;
    setCart([...pseudoCart]);
  }

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, addQuantity }}>
      {children}
    </CartContext.Provider>
  );
}