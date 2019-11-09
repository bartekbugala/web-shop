import { connect } from 'react-redux';
import Cart from './Cart';
import {
  getCart,
  addToCartRequest,
  removeOneFromCart,
  getRequest,
  resetRequest,
  removeProductFromCart
} from '../../../redux/shopRedux';

const mapStateToProps = state => ({
  cart: getCart(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  resetRequest: () => dispatch(resetRequest()),
  addProductToCart: (cart, product) =>
    dispatch(addToCartRequest(cart, product)),
  removeOneFromCart: (cart, product, removeAll) =>
    dispatch(removeOneFromCart(cart, product, removeAll)),
  removeProductFromCart: (cart, product, removeAll) =>
    dispatch(removeProductFromCart(cart, product, removeAll))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
