import SortingWidget from './SortingWidget';
import { connect } from 'react-redux';
import { loadSortedProductsByPageRequest } from '../../../../redux/shopRedux';
import { getSort } from '../../../../redux/reduxSelectors';

const mapStateToProps = state => ({
  sortParam: getSort(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage, sortParam) =>
    dispatch(loadSortedProductsByPageRequest(page, productsPerPage, sortParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingWidget);
