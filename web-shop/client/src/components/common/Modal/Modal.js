import React from 'react';
import './Modal.scss';

const Modal = ({ children, cart }) => (
  <div className="modal__overlay">
    <div className="modal__modal-window">
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>
        {cart.map(el => (
          <tr>
            <td>{el.name}</td>
            <td>{el.amount}</td>
            <td>{el.price}</td>
            <td>{el.price * el.amount}</td>
          </tr>
        ))}
      </table>
      {children}
    </div>
  </div>
);

export default Modal;
