import React from 'react';
import { PropTypes } from 'prop-types';
import ProductList from '../ProductList/ProductList';
import Spinner from '../../../common/Spinner/Spinner';
import Alert from '../../../common/Alert/Alert';
import Pagination from '../../../common/Pagination/Pagination';
import './Products.scss';

class Products extends React.Component {
  state = {
    presentPage: this.props.initialPage || 1
  };
  componentDidMount() {
    const {
      loadProductsByPage,
      initialPage,
      productsPerPage,
      sortParam
    } = this.props;
    loadProductsByPage(initialPage, productsPerPage, sortParam);
  }

  loadProductsPage = page => {
    const { loadProductsByPage, productsPerPage, sortParam } = this.props;
    loadProductsByPage(page, productsPerPage, sortParam);
    this.setState({
      presentPage: page
    });
  };

  render() {
    const { products, pages, pagination, request, initialPage } = this.props;
    const { loadProductsPage } = this;
    const { presentPage } = this.state;
    return (
      <div className="products-container">
        {request.pending && <Spinner />}
        {!request.pending && request.error !== null && (
          <Alert variant="error">{`Error: ${request.error}`}</Alert>
        )}
        {!request.pending && request.success && products.length === 0 && (
          <Alert variant="info">No products found</Alert>
        )}
        {pagination && !request.pending && request.success && (
          <Pagination
            className={'hello'}
            presentPage={presentPage}
            initialPage={initialPage}
            pages={pages}
            onPageChange={loadProductsPage}
          />
        )}
        {!request.pending && request.success && products.length > 0 && (
          <ProductList products={products} />
        )}
        {pagination && !request.pending && request.success && (
          <Pagination
            presentPage={presentPage}
            initialPage={initialPage}
            pages={pages}
            onPageChange={loadProductsPage}
          />
        )}
      </div>
    );
  }
}

Products.propTypes = {
  pages: PropTypes.number.isRequired,
  request: PropTypes.object.isRequired,
  initialPage: PropTypes.number.isRequired,
  productsPerPage: PropTypes.number.isRequired,
  pagination: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string,
      amount: PropTypes.number.isRequired
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired
};

export default Products;
