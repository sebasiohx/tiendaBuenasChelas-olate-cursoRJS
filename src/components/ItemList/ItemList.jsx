import Item from "../Item/Item";

const ItemList = ({ items })=>{
  return (
    <>
      {items.map((item, index)=>
        <div className="col-lg-3" key={index}>
          <Item key={item.id} item={item} />
        </div>
      )}
    </>
  );
}

export default ItemList;