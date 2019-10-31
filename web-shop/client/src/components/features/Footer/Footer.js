import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenuLinks } from '../../../redux/shopRedux';
import FooterMenu from '../../layout/FooterMenu/FooterMenu';

const mapStateToProps = state => ({
  menuLinks: getMenuLinks(state)
});

class Footer extends Component {
  render() {
    const { menuLinks } = this.props;

    return (
      <footer>
        <div className="footer__copyright">{'All rights reserved'}</div>
        <nav>
          <FooterMenu menuLinks={menuLinks} />
        </nav>
      </footer>
    );
  }
}

export default connect(mapStateToProps)(Footer);
