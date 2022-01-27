import Item from "../Item/Item";

const ItemList = ({ items })=>{
  return (
    <>
      {items.map((item)=>
        <div className="col-lg-3">
          <Item key={item.id} item={item} />
        </div>
      )}
    </>
  );
}

export default ItemList;