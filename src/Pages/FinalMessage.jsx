import { useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import { useParams } from "react-router-dom";

const FinalMessage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const db = getFirestore();
    db.collection("orders")
      .doc(orderId)
      .get()
      .then((res) => setOrder({ id: res.id, ...res.data() }));
  }, [orderId]);

  if (!order.id) {
    return (
      <div className="row">
        <div className="col-12">
          <h2 className="mb-5">Cargando...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-12">
        <h1 className="mb-5">Gracias por su compra, sr/sra. {order.buyer.name}</h1>
        <h2>Detalle de su compra:</h2>
      </div>
      <div className="col-12">
        <div className="row">
          {order.items.map((product) => {
            return (
              <div className="col-4 my-3">
                <div className="card d-flex flex-row">
                  <img src={product.item.img} className="card-img-top" style={{ maxHeight: '150px', width: 'auto' }} alt={product.item.name} />
                  <div className="card-body">
                    <h4 className="card-title">{product.item.name}</h4>
                    <p className="card-text">Precio: ${product.item.price}</p>
                    <p className="card-text">Cantidad: {product.quantity}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default FinalMessage;