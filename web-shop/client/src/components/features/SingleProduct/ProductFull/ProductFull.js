import React from 'react';
import ProductName from '../../../common/ProductCommons/ProductName/ProductName';
import Price from '../../../common/ProductCommons/Price/Price';
import Amount from '../../../common/ProductCommons/Amount/Amount';
import ProductDescription from '../../../common/ProductCommons/ProductDescription/ProductDescription';
import ProductTag from '../../../common/ProductCommons/ProductTag/ProductTag';
import Button from '../../../common/Button/Button';
import { connect } from 'react-redux';
import {
  addToCartRequest,
  getRequest,
  getCart,
  countCartProducts
} from '../../../../redux/shopRedux';
import './ProductFull.scss';

const mapStateToProps = state => ({
  cart: getCart(state),
  request: getRequest(state)
});
const mapDispatchToProps = dispatch => ({
  addProductToCart: (cart, product) =>
    dispatch(addToCartRequest(cart, product)),
  countCartProducts: cart => dispatch(countCartProducts(cart))
});

class ProductFull extends React.Component {
  componentDidMount() {
    const { countCartProducts, cart } = this.props;
    countCartProducts(cart);
  }

  componentDidUpdate() {
    const { countCartProducts, cart } = this.props;
    countCartProducts(cart);
  }

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
      <div className="full-product-container">
        <div className="full-product-img-wrapper">
          <img src={`${img}`} alt={`${name}`} />
        </div>
        <div>
          <div className="full-product-title-wrapper">
            <ProductName>{name}</ProductName>
            {tag && <ProductTag className="full-product-tag">{tag}</ProductTag>}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductFull);
