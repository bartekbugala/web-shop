import React from 'react';
import PropTypes from 'prop-types';

import './ProductTag.scss';

const ProductTag = ({ children }) => (
  <div className="product-tag-container">
    <p className="product-tag">{children}</p>
  </div>
);

ProductTag.propTypes = {
  children: PropTypes.string
};

export default ProductTag;
