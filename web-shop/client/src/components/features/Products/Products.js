import React from "react";
import { PropTypes } from "prop-types";
import ProductList from "../ProductList/ProductList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import Pagination from "../../common/Pagination/Pagination";
import SortingWidget from "../SortingWidget/SortingWidget";

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

  sortByNameAsc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "name");
  };
  sortByNameDesc = e => {
    e.preventDefault();
    console.log("sortByNameDesc");
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "-name");
  };
  sortByPriceAsc = e => {
    e.preventDefault();
    console.log("sortByNameDesc");
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "price");
  };
  sortByPriceDesc = e => {
    e.preventDefault();
    console.log("sortByNameDesc");
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "-price");
  };

  render() {
    const { products, pages, pagination, request, initialPage } = this.props;
    const { loadProductsPage } = this;
    const { presentPage } = this.state;
    return (
      <div>
        <div>
          {request.pending && <Spinner />}
          {!request.pending && request.error !== null && (
            <Alert variant="error">{`Error: ${request.error}`}</Alert>
          )}
          {!request.pending && request.success && products.length === 0 && (
            <Alert variant="info">No products found</Alert>
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
