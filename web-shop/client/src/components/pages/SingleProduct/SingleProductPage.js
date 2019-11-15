import React from 'react';
import ProductView from '../../features/SingleProduct/ProductView/ProductViewContainer';
import './SingleProduct.scss';
import { withRouter } from 'react-router-dom';

const SingleProduct = props => {
  return (
    <section className="main-section">
      <div className="single-product-container">
        <ProductView productId={props.match.params.id} />
      </div>
    </section>
  );
};
//export default SingleProduct;
export default withRouter(props => <SingleProduct {...props} />);
