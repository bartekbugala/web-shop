import SortingWidget from "./SortingWidget";
import { connect } from "react-redux";
import {
  getSort,
  loadSortedProductsByPageRequest
} from "../../../redux/shopRedux";

const mapStateToProps = state => ({
  sortParam: getSort(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage, sortParam) =>
    dispatch(loadSortedProductsByPageRequest(page, productsPerPage, sortParam))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingWidget);
