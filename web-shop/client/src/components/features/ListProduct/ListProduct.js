import React from 'react';

const ListProduct = props => {
  const { name, price, img } = props;
  return (
    <div>
      <div>
        <img src={img}></img>
      </div>
      <p>{`name: ${name}`}</p>
      <p>{`price: ${price}`}</p>
    </div>
  );
};

export default ListProduct;
