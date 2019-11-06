import SortingWidget from "./SortingWidget";
import { connect } from "react-redux";
import {
  getSort,
  changeSortingRequest,
  loadProductsByPageRequest
} from "../../../redux/shopRedux";

const mapStateToProps = state => ({
  sortParam: getSort(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage, sortParam) =>
    dispatch(loadProductsByPageRequest(page, productsPerPage, sortParam)),
  changeSorting: sortParam => dispatch(changeSortingRequest(sortParam))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingWidget);
