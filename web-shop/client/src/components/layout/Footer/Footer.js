import React from 'react';
import { connect } from 'react-redux';
import { getMenuLinks } from '../../../redux/shopRedux';
import FooterMenu from '../../layout/FooterMenu/FooterMenu';
import './Footer.scss';

const mapStateToProps = state => ({
  menuLinks: getMenuLinks(state)
});

const Footer = props => {
  const { menuLinks } = props;
  return (
    <footer>
      <div className="footer__copyright">{'All rights reserved'}</div>
      <nav className="footer__nav">
        <FooterMenu menuLinks={menuLinks} />
      </nav>
    </footer>
  );
};

export default connect(mapStateToProps)(Footer);