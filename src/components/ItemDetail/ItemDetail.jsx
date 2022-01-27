import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item })=>{
  return (
    <div className="jumbotron">
      <h2 className="display-4">{item.title}</h2>
      <p className="lead">{item.description}</p>
      <hr className="my-4" />
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{'$'+item.price}</h3>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemDetail;