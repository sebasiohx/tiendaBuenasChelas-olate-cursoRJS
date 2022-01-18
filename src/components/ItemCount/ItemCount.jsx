import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  const [counter, setCounter]  = useState(parseInt(initial));

  let addCounter = ()=> {
    if (counter >= stock){
      if(stock == 0){
        setCounter(parseInt(initial));
      } else {
        setCounter(parseInt(stock))
      }
    } else {
      setCounter(counter+1);
    }
  }

  let restCounter = ()=> {
    if (counter <= initial){
      setCounter(parseInt(initial));
    } else {
      setCounter(counter-1);
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        {/*  */}
        <div className="itemCount-cart">
          <ul className="pagination">
            <li className="page-item">
              <a className={'page-link '+(counter<=initial? 'disabled': '')} onClick={restCounter}>-</a>
            </li>
            <li className="page-item">
              <p className="count-number">{counter}</p>
              </li>
            <li className="page-item">
              <a className={'page-link '+(counter>=stock? 'disabled': '')} onClick={addCounter}>+</a>
            </li>
          </ul>
          <button className={"btn btn-primary "+(stock<1? 'disabled': '')} onClick={onAdd}>Agregar al carrito</button>
        </div>
        {/*  */}
      </div>
    </div>
  );  
}

export default ItemCount;