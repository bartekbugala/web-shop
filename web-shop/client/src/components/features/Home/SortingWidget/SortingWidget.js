import React from 'react';
import { Button } from 'reactstrap';
import './SortingWidget.scss';

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
      <div className="sorting-widget">
        <h3 className="sorting-title">Sort:</h3>
        <p onClick={sortByNameAsc}>
          <span>Name A-Z</span>
          <Button className="btn-outline-secondary">A-z</Button>
        </p>
        <p onClick={sortByNameDesc}>
          <span>Name Z-A</span>
          <Button className="btn-outline-secondary">Z-a</Button>
        </p>
        <p onClick={sortByPriceAsc}>
          <span>Price ascending</span>
          <Button className="btn-outline-secondary">$ 1-2</Button>
        </p>
        <p onClick={sortByPriceDesc}>
          <span>Price descending</span>
          <Button className="btn-outline-secondary">$ 2-1</Button>
        </p>
      </div>
    );
  }
}

export default SortingWidget;
