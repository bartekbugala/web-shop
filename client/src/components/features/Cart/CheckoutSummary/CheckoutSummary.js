import React from 'react';
import Button from '../../../common/Button/Button';
import './CheckoutSummary.scss';

const CheckoutSummary = ({ cart, total, discount }) => (
  <div className="checkout-summary">
    <h3>Order Summary</h3>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>
        {cart.map((el, i) => {
          let subtotal = el.price * el.amount;
          return (
            <tr key={i}>
              <td>{el.name}</td>
              <td>{el.amount}</td>
              <td>{el.price}</td>
              <td>{subtotal}</td>
            </tr>
          );
        })}
        <tr>
          <td
            className="checkout-discount"
            colSpan="4">{`Discount: ${discount}%`}</td>
        </tr>
        <tr>
          <td className="checkout-total" colSpan="4">{`Total: ${total}`}</td>
        </tr>
      </tbody>
    </table>
    <Button className="confirm-button" variant="confirm">
      Confrim Order
    </Button>
  </div>
);

export default CheckoutSummary;
