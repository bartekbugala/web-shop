import React from 'react';
import PropTypes from 'prop-types';

import './ProductTitle.scss';

const ProductTitle = ({ children }) => (
    <h2 className="product-title">
        {children}
    </h2>
);

ProductTitle.propTypes = {
    children: PropTypes.string,
};

export default ProductTitle;