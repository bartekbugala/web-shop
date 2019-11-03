import React from 'react';
import { PropTypes } from 'prop-types';
import { getProducts } from '../../../redux/shopRedux';
import ListProduct from '../ListProduct/ListProduct';
import Pagination from '../../common/Pagination/Pagination';
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
      <Pagination presentPage={1} initialPage={1} pages={1} onPageChange={6} />
    </div>
  );
};

export default connect(mapStateToProps)(ProductList);
