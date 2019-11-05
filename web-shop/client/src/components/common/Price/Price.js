import React from 'react';
import PropTypes from 'prop-types';

import './Price.scss';

const Price = ({ children }) => (
    <h2 className="price">
        {children}
    </h2>
);

Price.propTypes = {
    children: PropTypes.number,
};

export default Price;