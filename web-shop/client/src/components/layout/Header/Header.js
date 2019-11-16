import React from 'react';
import { connect } from 'react-redux';
import { getMenuLinks } from '../../../redux/shopRedux';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './Header.scss';

const mapStateToProps = state => ({
  menuLinks: getMenuLinks(state)
});

const Header = props => {
  const { menuLinks } = props;
  return (
    <header>
      <nav className="header-nav">
        <MainMenu menuLinks={menuLinks} />
      </nav>
    </header>
  );
};

export default connect(mapStateToProps)(Header);
