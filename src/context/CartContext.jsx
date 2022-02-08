import { createContext, useState } from "react";

//Context
export const CartContext = createContext([]);

//Custom provider
export const CartProvider = ({children}) =>{
  const [cart, setCart] = useState([]);

  const isInCart = (id)=>{
    if(cart.find((product)=> product.item.id == id)){
      return true;
    } else{
      return false;
    }
  };

  const addItem = (item, quantity)=>{
    let newItem = {item, quantity};
    setCart((cart)=>[...cart, newItem]);
  };

  const addQuantity = (id, quantity)=>{
    let item = cart.find((product)=> product.item.id == id);
    item.quantity += quantity;
    let indexItemCart = cart.indexOf(item);
    setCart((cart)=>cart[indexItemCart] = item);
  }

  const clearCart = ()=> setCart([]);

  return(
    <CartContext.Provider value={{cart, addItem, isInCart, addQuantity}}>
      {children}
    </CartContext.Provider>
  );
}