import React from 'react';
import './ListProduct.scss';
import { Link } from 'react-router-dom';
import ProductName from '../../../common/ProductCommons/ProductName/ProductName';
import ProductTag from '../../../common/ProductCommons/ProductTag/ProductTag';
import Price from '../../../common/ProductCommons/Price/Price';
import Spinner from '../../../common/Spinner/Spinner';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleLoading() {
    this.setState({ loading: false });
  }

  handleError() {
    this.setState({ loading: true });
  }
  render() {
    const { name, price, img, id, tag, amount } = this.props;
    const { loading, handleError, handleLoading } = this.state;
    return (
      <Link to={`products/${id}`}>
        {loading && <Spinner />}
        <div className="list-product__container">
          {!loading && (
            <img
              onLoad={handleLoading}
              onError={handleError}
              className="list-product__img"
              src={img}
              alt={`${name}`}
            />
          )}
          {amount < 5 && amount > 0 && (
            <div className="list-product__last-tag">
              <ProductTag>{`Last pieces`}</ProductTag>
            </div>
          )}
          {amount === 0 && (
            <div className="list-product__last-tag out-of-stock">
              <ProductTag>{`Out of stock`}</ProductTag>
            </div>
          )}
          {tag && (
            <div className="list-product__tag">
              <ProductTag>{tag}</ProductTag>
            </div>
          )}
          <div className="list-product__name">
            <ProductName>{name}</ProductName>
          </div>
          <div className="list-product__price">
            <Price>{price}</Price>
          </div>
        </div>
      </Link>
    );
  }
}

export default ListProduct;
