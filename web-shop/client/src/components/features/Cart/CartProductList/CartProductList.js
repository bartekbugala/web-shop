import React from 'react';
import Button from '../../../common/Button/Button';
import ProductName from '../../../common/ProductCommons/ProductName/ProductName';
import Price from '../../../common/ProductCommons/Price/Price';
import { cutText } from '../../../../utils/cutText';
import './CartProductList.scss';

const CartProductList = ({
  cart,
  removeOne,
  addToCart,
  removeProduct,
  total,
  discount
}) => (
  <ul className="cart-list">
    {cart.map(item => (
      <li key={item.id} className="cart-list-item">
        <div className="cart-list-item-col-container">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="cart-list-item-col-container cart-list-item-caption">
          <ProductName>{item.name}</ProductName>
          <p className="cart-list-item-description">
            {cutText(item.description, 200)}
          </p>
        </div>
        <div className="cart-list-item-col-container">
          <Price>{item.price}</Price>
        </div>
        <div className="cart-list-item-col-container">
          <div className="cart-list-item-amount-container">
            {<Button onClick={() => removeOne(item)}>-</Button>}
            <span className="cart-list-item-amount">{`${item.amount}`}</span>
            {<Button onClick={() => addToCart(item)}>+</Button>}
            <span>pcs.</span>
          </div>
          <div
            className="cart-list-item-remove"
            onClick={() => removeProduct(item)}>
            remove item
          </div>
        </div>
      </li>
    ))}
    <li className="discount">{`Discount: ${discount}%`}</li>
    <li className="total">{`Total: $${total}`}</li>
  </ul>
);

export default CartProductList;
