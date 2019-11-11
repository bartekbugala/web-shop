import React from 'react';
import Button from '../../../common/Button/Button';
import Spinner from '../../../common/Spinner/Spinner';
import Alert from '../../../common/Alert/Alert';
import Modal from '../../../features/Modal/Modal';
import './Cart.scss';
import CartProductList from '../CartProductList/CartProductList';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary';

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

  closeCheckout = () => {
    this.setState({ checkout: false });
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
    const { removeProduct, addToCart, removeOne, closeCheckout } = this;
    return (
      <div className="cart">
        {checkout && (
          <Modal cart={cart} handleModal={closeCheckout}>
            <CheckoutSummary cart={cart} />
          </Modal>
        )}
        {request.pending && <Spinner />}
        {!request.pending && request.error !== null && (
          <Alert variant="error">{`Error: ${request.error}`}</Alert>
        )}
        {!request.pending && cart.length === 0 && (
          <Alert variant="info">Cart is empty</Alert>
        )}
        {!request.pending && request.success && cart.length > 0 && (
          <CartProductList
            cart={cart}
            removeProduct={removeProduct}
            removeOne={removeOne}
            addToCart={addToCart}
          />
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
