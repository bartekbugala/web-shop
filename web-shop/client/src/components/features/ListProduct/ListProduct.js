import React from 'react';
import './ListProduct.scss';

const ListProduct = props => {
  const { name, price, img } = props;
  return (
    <div className="list-product__container">
      <img className="list-product__img" src={img} alt={`${name} image`} />
      <p className="list-product__name">{`name: ${name}`}</p>
      <p className="list-product__price">{`price: ${price}`}</p>
    </div>
  );
};

export default ListProduct;
