import { connect } from 'react-redux';
import Cart from './Cart';
import { getCart, addToCartRequest } from '../../../redux/shopRedux';

const mapStateToProps = state => ({
  cart: getCart(state)
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: (cart, product) => dispatch(addToCartRequest(cart, product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
