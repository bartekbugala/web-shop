import React from 'react';
import ProductName from '../../common/ProductName/ProductName';
import Price from '../../common/Price/Price';
import Button from '../../common/Button/Button';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Modal from '../../common/Modal/Modal';
import { cutText } from '../../../utils/cutText';
import './Cart.scss';

class Cart extends React.Component {
  state = {
    cart: this.props.cart,
    request: this.props.request,
    total: 0,
    checkout: false
  };
  componentDidMount() {
    const { resetRequest } = this.props;
    resetRequest();
    if (this.state.cart !== this.props.cart) {
      this.setState({ cart: this.props.cart });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.cart !== this.props.cart) {
      this.setState({ cart: this.props.cart });
    }
  }

  addToCart = item => {
    const { addProductToCart, cart } = this.props;
    addProductToCart(cart, item);
  };

  removeOne = item => {
    const { cart, removeOneFromCart } = this.props;
    removeOneFromCart(cart, item);
  };

  removeProduct = item => {
    const { removeProductFromCart, cart } = this.props;
    /* cart.filter(el => el.id !== item.id); */
    removeProductFromCart(cart, item, true);
  };

  checkout = cart => {
    let { total } = this.state;
    cart.forEach(el => {
      return (total += el.price * el.amount);
    });
    this.setState({ total: total });
  };

  render() {
    const { cart, request, checkout } = this.state;
    return (
      <div className="cart">
        {checkout && <Modal cart={cart} />}
        {request.pending && <Spinner />}
        {!request.pending && request.error !== null && (
          <Alert variant="error">{`Error: ${request.error}`}</Alert>
        )}
        {!request.pending && cart.length === 0 && (
          <Alert variant="info">Cart is empty</Alert>
        )}
        {!request.pending && request.success && cart.length > 0 && (
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
                    {<Button onClick={() => this.removeOne(item)}>-</Button>}
                    <span className="cart__list-item__amount">{`${item.amount}`}</span>
                    {<Button onClick={() => this.addToCart(item)}>+</Button>}
                    <span>pcs.</span>
                  </div>
                  <div
                    className="cart__list-item__remove"
                    onClick={() => this.removeProduct(item)}>
                    remove item
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart__checkout">
          <input placeholder="Discount Code"></input>
          <Button onClick={() => this.setState({ checkout: true })}>
            Checkout
          </Button>
        </div>
      </div>
    );
  }
}

export default Cart;
