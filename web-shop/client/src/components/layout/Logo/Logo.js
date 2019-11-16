import React from 'react';
import { connect } from 'react-redux';
import { getLogo } from '../../../redux/shopRedux';
import './Logo.scss';

const mapStateToProps = state => ({
  logo: getLogo(state)
});

const Logo = props => {
  const { logo } = props;
  return (
    <span className="header-logo">
      <img src="/images/duck_it_logo.svg" alt="duck it logo" />
    </span>
  );
};

export default connect(mapStateToProps)(Logo);
