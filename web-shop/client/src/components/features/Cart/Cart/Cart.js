import React from 'react';
import Button from '../../../common/Button/Button';
import Spinner from '../../../common/Spinner/Spinner';
import Alert from '../../../common/Alert/Alert';
import Modal from '../../../features/Modal/Modal';
import './Cart.scss';
import CartProductList from '../CartProductList/CartProductList';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary';
import { roundMoney } from '../../../../utils/roundMoney';

class Cart extends React.Component {
  state = {
    cart: this.props.cart,
    request: this.props.request,
    total: 0,
    checkout: false,
    discountCode: '',
    discount: this.props.discount
  };

  componentDidMount() {
    const { resetRequest } = this.props;
    this.checkoutTotal();
    resetRequest();
  }

  componentDidUpdate() {
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
    const { discount } = this.state;
    let total = 0;
    cart.forEach(el => {
      return (total += el.price * el.amount);
    });
    let currentDiscount = total * (discount / 100);
    this.setState({ total: roundMoney(total - currentDiscount) });
  };

  updateDiscount = async evt => {
    this.setState({
      discountCode: evt.target.value
    });
    await this.props.loadDiscount(evt.target.value);
    await this.setState({ discount: this.props.discount });
    this.checkoutTotal();
  };

  render() {
    const {
      cart,
      discount,
      request,
      checkout,
      total,
      discountCode
    } = this.state;
    const {
      removeProduct,
      addToCart,
      removeOne,
      closeCheckout,
      checkoutTotal,
      updateDiscount
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
        {!request.pending && (request.success || cart.length > 0) && (
          <CartProductList
            total={total}
            discount={discount}
            cart={cart}
            removeProduct={removeProduct}
            removeOne={removeOne}
            addToCart={addToCart}
          />
        )}
        <div className="cart__checkout">
          <p>demo codes: duck, kodilla</p>
          <input
            value={discountCode}
            onChange={updateDiscount}
            placeholder={discountCode ? discountCode : `Enter Code`}></input>
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
