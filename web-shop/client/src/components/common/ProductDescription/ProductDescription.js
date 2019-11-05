import React from 'react';
import PropTypes from 'prop-types';

import './ProductDescription.scss';

const ProductDescription = ({ children }) => (
    <p className="product-description">
        {children}
    </p>
);

ProductDescription.propTypes = {
    children: PropTypes.string,
};

export default ProductDescription;