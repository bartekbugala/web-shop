import React from 'react';
import PropTypes from 'prop-types';

import './Amount.scss';

const Amount = ({ children }) => (
  <h2 className="amount">In stock: {children}</h2>
);

Amount.propTypes = {
  children: PropTypes.number
};

export default Amount;
