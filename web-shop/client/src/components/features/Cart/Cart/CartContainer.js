import { connect } from 'react-redux';
import Cart from './Cart';
import {
  getCart,
  addToCartRequest,
  removeOneFromCart,
  getRequest,
  resetRequest,
  removeProductFromCart,
  loadDiscountRequest,
  getDiscount,
  getDiscountCode
} from '../../../../redux/shopRedux';

const mapStateToProps = state => ({
  cart: getCart(state),
  request: getRequest(state),
  discount: getDiscount(state) || 0,
  discountCode: getDiscountCode(state)
});

const mapDispatchToProps = dispatch => ({
  resetRequest: () => dispatch(resetRequest()),
  addProductToCart: (cart, product) =>
    dispatch(addToCartRequest(cart, product)),
  removeOneFromCart: (cart, product, removeAll) =>
    dispatch(removeOneFromCart(cart, product, removeAll)),
  removeProductFromCart: (cart, product, removeAll) =>
    dispatch(removeProductFromCart(cart, product, removeAll)),
  loadDiscount: code => dispatch(loadDiscountRequest(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
