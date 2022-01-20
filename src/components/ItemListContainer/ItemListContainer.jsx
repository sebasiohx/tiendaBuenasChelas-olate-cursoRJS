import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  return(
    <>
    <ItemCount stock="0" initial="1" />
    <ItemCount stock="5" initial="1" />
    </>
    );
}

export default ItemListContainer;