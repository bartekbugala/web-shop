import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPageLinks } from '../../../redux/shopRedux';
import MainMenu from '../../layout/MainMenu/MainMenu';

const mapStateToProps = state => ({
  links: getPageLinks(state)
});

class Header extends Component {
  render() {
    const { links } = this.props;

    return (
      <header>
        <nav>
          <MainMenu links={links} />
        </nav>
      </header>
    );
  }
}
export default connect(mapStateToProps)(Header);
