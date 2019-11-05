import React from 'react';
import './ProductFull.scss';
import ProductTitle from '../../common/ProductTitle/ProductTitle'
import Price from '../../common/Price/Price'
import ProductDescription from '../../common/ProductDescription/ProductDescription'
import ProductTag from '../../common/ProductTag/ProductTag'
import Button from '../../common/Button/Button'
import { connect } from 'react-redux';
import buyProductRequest from '../../../redux/shopRedux'

const mapStateToProps = state => ({
  /*   product: getSingleProduct(state),
    request: getRequest(state) */
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  buyProduct: () => dispatch(buyProductRequest(ownProps.productId))
});

const ProductFull = props => {
  const { name, price, img, description, tag, buyProduct } = props;
  return (

    <div className="full-product__container">
      <img className="full-product__img" src={`${img}`} alt={`${name}`} />
      <div>
        <ProductTitle>{name}</ProductTitle>
        <Price>{price}</Price>
        {description && <ProductDescription>{description}</ProductDescription>}
        {tag && <ProductTag>{tag}</ProductTag>}
        <Button onClick={buyProduct}>{`Buy`}</Button>
      </div>
    </div>
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFull);