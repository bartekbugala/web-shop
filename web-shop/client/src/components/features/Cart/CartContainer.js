import { connect } from 'react-redux';
import Cart from './Cart';
import { getCart } from '../../../redux/shopRedux';

const mapStateToProps = state => ({
  cart: getCart(state)
});

//const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps
  /* mapDispatchToProps */
)(Cart);
