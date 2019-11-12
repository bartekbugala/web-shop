import React from 'react';
import PropTypes from 'prop-types';

import './ProductName.scss';

const ProductName = ({ children }) => (
  <h2 className="product-name">{children}</h2>
);

ProductName.propTypes = {
  children: PropTypes.string
};

export default ProductName;
