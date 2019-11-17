import React from 'react';
import { getProducts } from '../../../../redux/reduxSelectors';
import ListProduct from '../ListProduct/ListProduct';
import { connect } from 'react-redux';
import Spinner from '../../../common/Spinner/Spinner';
import './ProductList.scss';

const mapStateToProps = state => ({
  products: getProducts(state)
});

const ProductList = ({ products }) => {
  return (
    <div>
      {products.length === 0 && <Spinner />}
      {products && (
        <div className="product-list">
          {products.map(product => (
            <ListProduct key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(ProductList);
