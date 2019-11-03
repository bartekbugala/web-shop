import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsByPageRequest, getPages } from '../../../redux/shopRedux';
import Products from './Products';

const mapStateToProps = (state, ownProps) => ({
  products: getProducts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialPage: ownProps.initialPage || 1,
  productsPerPage: ownProps.productsPerPage || 10,
  pagination: ownProps.pagination || false
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
