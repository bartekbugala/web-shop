import React from 'react';
import './ListProduct.scss';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom'

const ListProduct = props => {
  const { name, price, img, id } = props;
  return (
    <Link to={`products/${id}`}>
      <div className="list-product__container">
      <img className="list-product__img" src={img} alt={`${name}`} />   
      <p className="list-product__name">{`name: ${name}`}</p>
      <p className="list-product__price">{`price: ${price}`}</p>
    </div>
     </Link>
  );
};

export default ListProduct;
