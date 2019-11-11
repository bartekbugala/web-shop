import React from 'react';
import './Modal.scss';
import Button from '../Button/Button';

const Modal = ({ children, cart, handleModal }) => (
  <div className="modal__overlay">
    <div className="modal__modal-window">
      <Button
        variant="danger"
        style={{ background: `white`, float: `right` }}
        onClick={handleModal}>
        X
      </Button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
          {cart.map((el, i) => (
            <tr key={i}>
              <td>{el.name}</td>
              <td>{el.amount}</td>
              <td>{el.price}</td>
              <td>{el.price * el.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {children}
    </div>
  </div>
);

export default Modal;
