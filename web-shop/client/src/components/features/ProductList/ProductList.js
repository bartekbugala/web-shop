import React from 'react';
import { PropTypes } from 'prop-types';
import { getProducts } from '../../../redux/shopRedux';
import ListProduct from '../ListProduct/ListProduct';
import { connect } from 'react-redux';
import './ProductList.scss';

const mapStateToProps = state => ({
  products: getProducts(state)
});

const ProductList = ({ products }) => {
  return (
    <div>
      <div className="main__product-list">
        {products.map(product => (
          <ListProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ProductList);
