import React from 'react';

class SortingWidget extends React.Component {
  sortByNameAsc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, 'name');
  };
  sortByNameDesc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, '-name');
  };
  sortByPriceAsc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, 'price');
  };
  sortByPriceDesc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, '-price');
  };

  render() {
    const {
      sortByNameAsc,
      sortByNameDesc,
      sortByPriceAsc,
      sortByPriceDesc
    } = this;
    return (
      <div>
        <h2>Sort:</h2>
        <p onClick={sortByNameAsc}>Name A-Z</p>
        <p onClick={sortByNameDesc}>Name Z-A</p>
        <p onClick={sortByPriceAsc}>Price ascending</p>
        <p onClick={sortByPriceDesc}>Price descending</p>
      </div>
    );
  }
}

export default SortingWidget;
