import React from 'react';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import ProductFull from '../ProductFull/ProductFull';

class ProductView extends React.Component {
  componentDidMount() {
    const { loadSingleProduct } = this.props;
    loadSingleProduct();
  }
  render() {
    const { product, request, productId } = this.props;
    const { name, price, img, description, tag } = product;
    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && (
          <Alert variant="error">{`Error: ${request.error}`}</Alert>
        )}
        {!request.pending &&
          request.success &&
          (Object.entries(product).length === 0 &&
            product.constructor === Object) && (
            <Alert variant="info">No product</Alert>
          )}
        {!request.pending &&
          request.success &&
          Object.entries(product).length !== 0 &&
          product.constructor === Object && <ProductFull product={product} />}
      </div>
    );
  }
}

export default ProductView;
