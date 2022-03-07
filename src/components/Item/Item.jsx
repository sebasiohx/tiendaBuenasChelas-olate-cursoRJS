import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  
  return (
    <div className="card shadow-sm" key={item.id}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} style={{width: '100%', maxWidth:'150px', margin: '0 auto'}}/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{'$' + item.price}</p>
        <button className="btn btn-primary" onClick={() => navigate(`/item/${item.id}`)}>Ver detalle</button>
      </div>
    </div>
  );
}

export default Item;