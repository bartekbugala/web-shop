import React from 'react';
import ProductList from '../../features/ProductList/ProductList';
import SortingWidget from '../../features/SortingWidget/SortingWidget';
import './HomePage.scss';

const HomePage = () => (
  <section className="main__main-section">
    <div className="main__sorting-widget-container">
      <SortingWidget />
    </div>
    <div className="main__product-list-container">
      <ProductList />
    </div>
  </section>
);
export default HomePage;
