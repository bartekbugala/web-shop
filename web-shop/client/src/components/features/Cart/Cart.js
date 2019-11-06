import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.scss';

class Cart extends React.Component {
  state = {
    cart: this.props.cart
  };
  render() {
    const { cart } = this.state;
    return (
      <div>
        <div>
          {cart.map(item => (
            <div
              key={item.id}>{`Name:${item.name} Amount: ${item.amount}`}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
