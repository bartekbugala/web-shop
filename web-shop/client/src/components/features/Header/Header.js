import React from 'react';
import { connect } from 'react-redux';
import { getMenuLinks } from '../../../redux/shopRedux';
import MainMenu from '../../layout/MainMenu/MainMenu';

const mapStateToProps = state => ({
  menuLinks: getMenuLinks(state)
});

const Header = props => {
  const { menuLinks } = props;

  return (
    <header>
      <nav>
        <MainMenu menuLinks={menuLinks} />
      </nav>
    </header>
  );
};

export default connect(mapStateToProps)(Header);
