import { connect } from 'react-redux';
import Cart from './Cart';
import {
  addToCartRequest,
  removeOneFromCart,
  removeProductFromCart,
  loadDiscountRequest,
  countCartProducts,
  cleanUpCart
} from '../../../../redux/reduxThunks';
import { resetRequest } from '../../../../redux/reduxActions';
import {
  getCart,
  getCartProducts,
  getRequest,
  getDiscount,
  getDiscountCode
} from '../../../../redux/reduxSelectors';

const mapStateToProps = state => ({
  cart: getCart(state),
  cartProducts: getCartProducts(state),
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
  loadDiscount: code => dispatch(loadDiscountRequest(code)),
  countCartProducts: cart => dispatch(countCartProducts(cart)),
  cleanUpCart: cart => dispatch(cleanUpCart(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
