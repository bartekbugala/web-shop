import React from 'react';
import './ProductFull.scss';

const ProductFull = props => {
  const { name, price, img } = props;
  return (

      <div className="list-product__container">
      <img className="list-product__img" src={`../${img}`} alt={`${name}`} />   
      <p className="list-product__name">{`name: ${name}`}</p>
      <p className="list-product__price">{`price: ${price}`}</p>
    </div>
  );
};

export default ProductFull;
