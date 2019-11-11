import React from 'react';
import Button from '../../../common/Button/Button';
import ProductName from '../../../common/ProductCommons/ProductName/ProductName';
import Price from '../../../common/ProductCommons/Price/Price';
import { cutText } from '../../../../utils/cutText';
import './CartProductList.scss';

const CartProductList = ({ cart, removeOne, addToCart, removeProduct }) => (
  <ul className="cart__list">
    {cart.map(item => (
      <li key={item.id} className="cart__list-item">
        <div className="cart__list-item__col-container">
          <img src={item.img} />
        </div>
        <div className="cart__list-item__col-container cart__list-item__description">
          <ProductName>{item.name}</ProductName>
          <article>{cutText(item.description, 200)}</article>
        </div>
        <div className="cart__list-item__col-container">
          <Price>{item.price}</Price>
        </div>
        <div className="cart__list-item__col-container">
          <div className="cart__list-item__amount-container">
            {<Button onClick={() => removeOne(item)}>-</Button>}
            <span className="cart__list-item__amount">{`${item.amount}`}</span>
            {<Button onClick={() => addToCart(item)}>+</Button>}
            <span>pcs.</span>
          </div>
          <div
            className="cart__list-item__remove"
            onClick={() => removeProduct(item)}>
            remove item
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default CartProductList;
