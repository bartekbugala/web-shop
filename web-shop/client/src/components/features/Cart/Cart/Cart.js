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
    this.checkoutTotal();
    resetRequest();
  }

  componentDidUpdate(prevProps) {
    if (this.state.cart !== this.props.cart) {
      this.setState({ cart: this.props.cart });
      this.checkoutTotal(this.props.cart);
    }
  }

  addToCart = async item => {
    const { addProductToCart, cart } = this.props;
    await addProductToCart(cart, item);
    this.checkoutTotal();
  };

  removeOne = async item => {
    const { cart, removeOneFromCart } = this.props;
    await removeOneFromCart(cart, item);
    this.checkoutTotal();
  };

  removeProduct = async item => {
    const { removeProductFromCart, cart } = this.props;
    await removeProductFromCart(cart, item, true);
    this.checkoutTotal();
  };

  closeCheckout = () => {
    this.setState({ checkout: false });
  };

  checkoutTotal = (cart = this.state.cart) => {
    let total = 0;
    cart.forEach(el => {
      return (total += el.price * el.amount);
    });
    this.setState({ total: total });
  };

  render() {
    const { cart, request, checkout, total } = this.state;
    const {
      removeProduct,
      addToCart,
      removeOne,
      closeCheckout,
      checkoutTotal
    } = this;
    return (
      <div className="cart">
        {checkout && (
          <Modal cart={cart} handleModal={closeCheckout}>
            <CheckoutSummary cart={cart} total={total} />
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
            total={total}
            cart={cart}
            removeProduct={removeProduct}
            removeOne={removeOne}
            addToCart={addToCart}
          />
        )}
        <div className="cart__checkout">
          <input placeholder="Discount Code"></input>
          <Button
            variant="confirm"
            onClick={() => {
              checkoutTotal();
              this.setState({ checkout: true });
            }}>
            Checkout
          </Button>
        </div>
      </div>
    );
  }
}

export default Cart;
