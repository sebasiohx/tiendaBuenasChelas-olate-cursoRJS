import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  return(
    <ul>
      <li>
        <ItemCount stock="3" initial="1" />
      </li>
      <li>Item 1 de la lista</li>
      <li>Item 2 de la lista</li>
      <li>Item 3 de la lista</li>
    </ul>
  );
}

export default ItemListContainer;