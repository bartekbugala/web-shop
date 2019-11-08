import React from 'react';
import { getProducts } from '../../../redux/shopRedux';
import ListProduct from '../ListProduct/ListProduct';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner/Spinner';
import './ProductList.scss';

const mapStateToProps = state => ({
  products: getProducts(state)
});

const ProductList = ({ products }) => {
  return (
    <div>
      {!products && <Spinner />}
      {products && (
        <div className="main__product-list">
          {products.map(product => (
            <ListProduct key={product.id} {...product} />
          ))}
        </div>)}
    </div>
  );
};

export default connect(mapStateToProps)(ProductList);
