import React from 'react';
import Products from '../../features/Products/ProductsContainer';
import SortingWidget from '../../features/SortingWidget/SortingWidget';
import './HomePage.scss';

const HomePage = () => (
  <section className="main__main-section">
    <div className="main__sorting-widget-container">
      <SortingWidget />
    </div>
    <div className="main__product-list-container">
      <Products initialPage={1} productsPerPage={6} pagination={true} />
    </div>
  </section>
);
export default HomePage;
