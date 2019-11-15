import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import { Link, withRouter } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { getCart, getCartProducts } from '../../../redux/shopRedux';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainMenu.scss';

const mapStateToProps = state => ({
  cart: getCart(state),
  cartProducts: getCartProducts(state)
});

const MainMenu = ({ menuLinks, location, cartProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="container-fluid" light color="light" expand="md">
      <NavbarBrand href="/">
        <Logo />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {menuLinks.map((link, index) => {
            if (link.path !== '/cart') {
              return (
                <NavItem key={index}>
                  <Link
                    className={`nav-link ${(location.pathname === link.path &&
                      'active') ||
                      ''}`}
                    to={link.path}>
                    {link.title}
                  </Link>
                </NavItem>
              );
            }
            return (
              <NavItem key={index} className="header-menu-cart-icon">
                <Link
                  className={`nav-link ${(location.pathname === link.path &&
                    'active') ||
                    ''}
                  `}
                  to="/cart">
                  <MdShoppingCart />
                  {cartProducts > 0 && (
                    <div className="cart-icon-products">{cartProducts}</div>
                  )}
                </Link>
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

MainMenu.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(
  withRouter(props => <MainMenu {...props} />)
);
