import React from 'react';
import './Cart.scss';
import ProductTitle from '../../common/ProductTitle/ProductTitle';
import { cutText } from '../../../utils/cutText'
import Button from '../../common/Button/Button'

class Cart extends React.Component {
  state = {
    cart: this.props.cart
  };

  addToCart = (item) => {
    const { addProductToCart, cart } = this.props;
    addProductToCart(cart, item);
  };
  removeFromCart = () => {

  }

  render() {
    const { cart } = this.state;
    const { addToCart } = this;
    return (
      <div>
        <ul className="cart__list">
          {cart.map(item => (
            <li key={item.id} className="cart__list-item">
              <div className="cart__list-item__col-container"><img src={item.img} /></div>
              <div className="cart__list-item__col-container cart__list-item__description">
                <ProductTitle>{`Name:${item.name}`}</ProductTitle>
                <article>{cutText(item.description, 200)}</article>
              </div>
              <div className="cart__list-item__col-container">{`$${item.price}`}</div>
              <div className="cart__list-item__col-container">
                <div className="cart__list-item__amount-container">
                  <Button onClick={() => console.log('remove item from cart')}>-</Button>
                  <span className="cart__list-item__amount">{`${item.amount}`}</span>
                  <Button onClick={() => addToCart(item)}>+</Button>
                  <span>szt.</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;
