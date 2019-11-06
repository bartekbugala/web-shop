import React from 'react';
import './Cart.scss';

class Cart extends React.Component {
  state = {
    cart: this.props.cart
  };
  render() {
    return (
      <div>
        <h1>Cart</h1>
      </div>
    );
  }
}

export default Cart;
