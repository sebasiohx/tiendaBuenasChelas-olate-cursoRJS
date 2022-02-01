import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  
  return (
    <div className="card" key={item.id}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{'$' + item.price}</p>
        <button className="btn btn-primary" onClick={() => navigate(`/item/${item.id}`)}>Ver más</button>
      </div>
    </div>
  );
}

export default Item;