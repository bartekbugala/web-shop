import React from 'react';
import './ProductFull.scss';
import ProductTitle from '../../common/ProductTitle/ProductTitle';
import Price from '../../common/Price/Price';
import ProductDescription from '../../common/ProductDescription/ProductDescription';
import ProductTag from '../../common/ProductTag/ProductTag';
import Button from '../../common/Button/Button';
import { connect } from 'react-redux';
import {
  addToCartRequest,
  getRequest,
  getCart
} from '../../../redux/shopRedux';

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
    console.log(cart);
    addProductToCart(cart, product);
  };

  render() {
    const { addToCart } = this;
    const { product } = this.props;
    const { name, price, img, description, tag } = product;
    return (
      <div className="full-product__container">
        <img className="full-product__img" src={`${img}`} alt={`${name}`} />
        <div>
          <ProductTitle>{name}</ProductTitle>
          <Price>{price}</Price>
          {description && (
            <ProductDescription>{description}</ProductDescription>
          )}
          {tag && <ProductTag>{tag}</ProductTag>}
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
