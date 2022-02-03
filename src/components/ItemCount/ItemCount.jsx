import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(parseInt(initial));

  let addCounter = () => {
    if (counter >= stock) {
      if (stock == 0) {
        setCounter(parseInt(initial));
      } else {
        setCounter(parseInt(stock))
      }
    } else {
      setCounter(counter + 1);
    }
  }

  let restCounter = () => {
    if (counter <= initial) {
      setCounter(parseInt(initial));
    } else {
      setCounter(counter - 1);
    }
  }


  return (
    <div className="itemCount-cart">
      <ul className="pagination mb-1">
        <li className="page-item">
          <a className={'page-link ' + (counter <= initial ? 'disabled' : '')} onClick={restCounter}>-</a>
        </li>
        <li className="page-item">
          <p className="count-number mb-0">{counter}</p>
        </li>
        <li className="page-item">
          <a className={'page-link ' + (counter >= stock ? 'disabled' : '')} onClick={addCounter}>+</a>
        </li>
      </ul>
      <button className={"btn btn-primary " + (stock < 1 ? 'disabled' : '')} onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;