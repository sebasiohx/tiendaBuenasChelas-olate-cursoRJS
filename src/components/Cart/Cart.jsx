import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "../../firebase";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  const getTotal = (cart) => {
    let total = 0;
    cart.forEach((element) => {
      total += element.item.price * element.quantity;
    });
    return total;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!name || !phone) {
      console.log("Por favor llene los campos");
      return false;
    }

    const newOrder = {
      buyer: { name, phone },
      items: cart,
      total: getTotal(cart),
    };

    console.log(newOrder);
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const response = await ordersCollection.add(newOrder);
    clearCart();
    navigate(`/thanks/${response.id}`);
  };

  if (cart.length == 0) {
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="mb-5">Carrito de compras</h1>
          <h2>El carrito esta vacio, si quieres puedes ver el catálogo</h2>
          <br />
          <button className="btn btn-primary" onClick={() => navigate("/")}>Ver catálogo</button>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className="row pb-5">
          <div className="col-12">
            <h1>Carrito de compras</h1>
          </div>

          {cart.map((product) => {
            return (
              <div className="col-4 my-3">
                <CartItem item={product} />
              </div>
            );
          })}

          <div className="col-12">
            <h2><strong>Total:</strong> {`$${getTotal(cart)}`}</h2>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-6">
            <h2>Introduzca sus datos:</h2>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Escriba su nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="phone">Teléfono</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Escriba su teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div>
                <button className="btn btn-outline-primary mt-4 mr-3" onClick={() => navigate("/")}>Seguir Comprando</button>
                <input type="submit" value="Finalizar compra" className="btn btn-primary mt-4" />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

}

export default Cart;