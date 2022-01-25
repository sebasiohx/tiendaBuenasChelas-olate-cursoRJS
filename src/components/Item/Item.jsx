const Item = ({ item }) => {
  return(
    <div className="card">
    <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{'$'+item.price}</p>
      </div>
  </div>
  );
}

export default Item;