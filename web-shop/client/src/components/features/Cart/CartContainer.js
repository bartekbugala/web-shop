import { connect } from 'react-redux';
import Cart from './Cart';
import { getCart, addToCartRequest, removeFromCartRequest } from '../../../redux/shopRedux';

const mapStateToProps = state => ({
  cart: getCart(state)
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: (cart, product) => dispatch(addToCartRequest(cart, product)),
  removeProductFromCart: (cart, product) => dispatch(removeFromCartRequest(cart, product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
