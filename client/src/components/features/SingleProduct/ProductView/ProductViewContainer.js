import { connect } from 'react-redux';
import { loadSingleProductRequest } from '../../../../redux/reduxThunks';
import { getSingleProduct, getRequest } from '../../../../redux/reduxSelectors';
import ProductView from './ProductView';

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSingleProduct: () =>
    dispatch(loadSingleProductRequest(ownProps.productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
