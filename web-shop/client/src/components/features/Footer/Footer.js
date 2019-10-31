import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPageLinks } from '../../../redux/shopRedux';
import FooterMenu from '../../layout/FooterMenu/FooterMenu';

const mapStateToProps = state => ({
  links: getPageLinks(state)
});

class Footer extends Component {
  render() {
    const { links } = this.props;

    return (
      <footer>
        <div className="footer__copyright">{'All rights reserved'}</div>
        <nav>
          <FooterMenu links={links} />
        </nav>
      </footer>
    );
  }
}

export default connect(mapStateToProps)(Footer);
