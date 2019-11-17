import React from 'react';
import Products from '../../features/Home/Products/ProductsContainer';
import SortingWidget from '../../features/Home/SortingWidget/SortingWidgetContainer';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <section className="main-section">
        <div className="sorting-widget-container">
          <SortingWidget />
        </div>
        <div className="product-list-container">
          <Products initialPage={1} productsPerPage={6} pagination={true} />
        </div>
      </section>
    );
  }
}
export default HomePage;
