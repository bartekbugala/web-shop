import React from 'react';
import Button from '../../../common/Button/Button';
import './CheckoutSummary.scss';

const CheckoutSummary = ({ cart }) => (
  <div>
    {' '}
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
    <Button>Order</Button>
  </div>
);

export default CheckoutSummary;
