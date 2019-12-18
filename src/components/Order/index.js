import React from 'react';
import './styles.css';

import MenuItem from '../MenuItem/index';

function Order(props) {
  return (
    <div>
      <h2 className="order-title">Pedido</h2>
      <div className="order-container">
        {
          props.item.map((item) => {
            return (
              <MenuItem name={item.name} price={item.price} key={`order${item.id}`} onClick='' />
            )
          })
        }
      </div>
      <div className="order-bottom">
        <span className="order-total order-text">Total: R${props.total}</span>
        <button className="order-send order-text" onClick={props.send}>Enviar pedido</button>
      </div>
    </div>
  )
}

export default Order;