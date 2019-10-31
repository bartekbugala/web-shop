import React from 'react';
import { connect } from 'react-redux';
import { getLogo } from '../../../redux/shopRedux';

const mapStateToProps = state => ({
  logo: getLogo(state)
});

const Logo = props => {
  const { logo } = props;
  return <img className="header__logo" src={logo.src} alt={logo.alt} />;
};

export default connect(mapStateToProps)(Logo);
