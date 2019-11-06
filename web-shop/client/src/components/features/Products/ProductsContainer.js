import { connect } from "react-redux";
import {
  getProducts,
  getRequest,
  loadProductsByPageRequest,
  getPages,
  getSort,
  changeSortingRequest
} from "../../../redux/shopRedux";
import Products from "./Products";

const mapStateToProps = (state, ownProps) => ({
  products: getProducts(state),
  request: getRequest(state),
  pages: getPages(state),
  sortParam: getSort(state),
  initialPage: ownProps.initialPage || 1,
  productsPerPage: ownProps.productsPerPage || 10,
  pagination: ownProps.pagination || false
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage, sortParam) =>
    dispatch(loadProductsByPageRequest(page, productsPerPage, sortParam)),
  changeSorting: sortParam => dispatch(changeSortingRequest(sortParam))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
