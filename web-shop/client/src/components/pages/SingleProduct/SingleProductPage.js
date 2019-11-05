import React from 'react';
import ProductView from '../../features/ProductView/ProductViewContainer';
import './SingleProduct.scss';
import {withRouter} from 'react-router-dom';

const SingleProduct = props => {

    return (
  <section className="main__main-section">
    <div className="main__single-product-container">
      <ProductView productId={props.match.params.id}/>
    </div>
  </section>
)};
//export default SingleProduct;
export default withRouter(props => <SingleProduct {...props} />);