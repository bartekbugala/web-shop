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
  addProductToCart: (cart, product) => dispatch(addToCartRequest(cart, product)),
  countCartProducts: (products) => dispatch(countCartProducts(products))
});

class ProductFull extends React.Component {
  addToCart = async () => {
    /*     e.preventDefault(); */
    const { addProductToCart, cart, product } = this.props;
    addProductToCart(cart, product);
    this.updateCartProducts(cart);
    console.log(cart)
  };

  updateCartProducts = cart => {
    let products = 0;
    cart.forEach(el => {
      products += el.amount
    });
    this.props.countCartProducts(products);
  }

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
