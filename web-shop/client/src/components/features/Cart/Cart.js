import React from 'react';
import './Cart.scss';
import ProductTitle from '../../common/ProductTitle/ProductTitle';
import { cutText } from '../../../utils/cutText';
import Button from '../../common/Button/Button';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Cart extends React.Component {
  state = {
    cart: this.props.cart,
    request: this.props.request
  };
  componentDidMount() {
    const { cart } = this.props;
    this.setState({ cart: cart })
  }

  addToCart = item => {
    const { addProductToCart } = this.props;
    const { cart } = this.props;
    addProductToCart(cart, item).then(this.setState({ cart: cart }));
  };
  removeFromCart = item => {
    const { removeProductFromCart, cart } = this.props;
    removeProductFromCart(cart, item).then(this.setState({ cart: cart }));
  }

  render() {
    const { cart, request } = this.state;
    return (
      <div>
        {request.pending && <Spinner />}
        {!request.pending && request.error !== null && (
          <Alert variant="error">{`Error: ${request.error}`}</Alert>
        )}
        {!request.pending && request.success && cart.length === 0 && (
          <Alert variant="info">No products found</Alert>
        )}
        {!request.pending && request.success && cart.length > 0 && (
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
                    <Button onClick={() => this.removeFromCart(item)}>-</Button>
                    <span className="cart__list-item__amount">{`${item.amount}`}</span>
                    <Button onClick={() => this.addToCart(item)}>+</Button>
                    <span>szt.</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>)}
      </div>
    );
  }
}

export default Cart;
