import { connect } from "react-redux";
import Cart from "./Cart";
import { getCart } from "trace_events";

const mapStateToProps = state => ({
  cart: getCart(state)
});

const mapStateToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
