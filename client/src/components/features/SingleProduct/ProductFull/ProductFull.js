import React from 'react';
import ProductName from '../../../common/ProductCommons/ProductName/ProductName';
import Price from '../../../common/ProductCommons/Price/Price';
import Amount from '../../../common/ProductCommons/Amount/Amount';
import ProductDescription from '../../../common/ProductCommons/ProductDescription/ProductDescription';
import ProductTag from '../../../common/ProductCommons/ProductTag/ProductTag';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  addToCartRequest,
  countCartProducts
} from '../../../../redux/reduxThunks';
import { getRequest, getCart } from '../../../../redux/reduxSelectors';
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
        <div className="full-product-caption">
          <div className="full-product-title-wrapper">
            <div>
              <ProductName>{name}</ProductName>
              <Amount>{amount}</Amount>
            </div>

            {tag && <ProductTag className="full-product-tag">{tag}</ProductTag>}
            <Price>{price}</Price>
          </div>

          {description && (
            <ProductDescription>{description}</ProductDescription>
          )}
          <Button
            className="btn-lg btn-block"
            onClick={addToCart}>{`Add to cart`}</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFull);
