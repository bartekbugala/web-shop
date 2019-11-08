import React from "react";

class SortingWidget extends React.Component {
  sortByNameAsc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "name");
  };
  sortByNameDesc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "-name");
  };
  sortByPriceAsc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "price");
  };
  sortByPriceDesc = e => {
    e.preventDefault();
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage, "-price");
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
        <h2>Sortuj:</h2>
        <p onClick={sortByNameAsc}>Nazwa A-Z</p>
        <p onClick={sortByNameDesc}>Nazwa Z-A</p>
        <p onClick={sortByPriceAsc}>Cena rosnąco</p>
        <p onClick={sortByPriceDesc}>Cena malejąco</p>
      </div>
    );
  }
}

export default SortingWidget;
