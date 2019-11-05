import React from 'react';
import ListProduct from '../ListProduct/ListProduct';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class ProductView extends React.Component {
  componentDidMount() {
    const { loadSingleProduct } = this.props;
    loadSingleProduct();
  }
  render() {
    const { product, request } = this.props;
    const { name, price, img} = product;
    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">{`Error: ${request.error}`}</Alert>}
        {!request.pending && request.success && (Object.entries(product).length === 0 && product.constructor === Object) && (
          <Alert variant="info">No product</Alert>
        )}
        {!request.pending && request.success && Object.entries(product).length !== 0 && product.constructor === Object && (
          <ListProduct name={name} price={price} img={img} id={productId} />
        )}
      </div>
    );
  }
}

export default ProductView;
