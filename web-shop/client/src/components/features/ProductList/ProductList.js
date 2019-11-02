import React from 'react';
import { PropTypes } from 'prop-types';
import { getProducts } from '../../../redux/shopRedux';
import ListProduct from '../ListProduct/ListProduct';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  products: getProducts(state)
});

const ProductList = ({ products }) => {
  console.log('Produkty', products);
  return (
    <div>
      <section className="main__product-list">
        {products.map(product => (
          <ListProduct key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};

export default connect(mapStateToProps)(ProductList);
