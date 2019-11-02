import React from 'react';
import ProductList from '../../features/ProductList/ProductList';
import SortingWidget from '../../features/SortingWidget/SortingWidget';

const HomePage = () => (
  <section className="main__home">
    <aside className="main__sorting-widget">
      <SortingWidget />
    </aside>
    <ProductList />
  </section>
);
export default HomePage;
