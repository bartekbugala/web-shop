import React from 'react';
import './ProductFull.scss';
import ProductName from '../../../common/ProductName/ProductName';
import Price from '../../../common/Price/Price';
import Amount from '../../../common/Amount/Amount';
import ProductDescription from '../../../common/ProductDescription/ProductDescription';
import ProductTag from '../../../common/ProductTag/ProductTag';
import Button from '../../../common/Button/Button';
import { connect } from 'react-redux';
import {
  addToCartRequest,
  getRequest,
  getCart
} from '../../../../redux/shopRedux';

const mapStateToProps = state => ({
  /*   product: getSingleProduct(state), */
  cart: getCart(state),
  request: getRequest(state)
});
const mapDispatchToProps = dispatch => ({
  addProductToCart: (cart, product) => dispatch(addToCartRequest(cart, product))
});

class ProductFull extends React.Component {
  addToCart = e => {
    e.preventDefault();
    const { addProductToCart, cart, product } = this.props;
    addProductToCart(cart, product);
  };

  render() {
    const { addToCart } = this;
    const { product } = this.props;
    const { name, price, img, description, tag, amount } = product;
    return (
      <div className="full-product__container">
        <div className="full-product__img-wrapper">
          <img src={`${img}`} alt={`${name}`} />
        </div>
        <div>
          <div className="full-product__title-wrapper">
            <ProductName>{name}</ProductName>
            {tag && (
              <ProductTag className="full-product__tag">{tag}</ProductTag>
            )}
          </div>
          <Price>{price}</Price>
          <Amount>{amount}</Amount>
          {description && (
            <ProductDescription>{description}</ProductDescription>
          )}

          <Button onClick={addToCart}>{`Add to cart`}</Button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFull);
