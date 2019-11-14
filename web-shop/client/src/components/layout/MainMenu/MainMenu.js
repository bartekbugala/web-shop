import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { getCart, getCartProducts } from '../../../redux/shopRedux';
import { connect } from 'react-redux';
import './MainMenu.scss';

const mapStateToProps = state => ({
  cart: getCart(state),
  cartProducts: getCartProducts(state)
});

const MainMenu = ({ menuLinks, location, cartProducts }) => (
  <ul className="header__menu">
    {menuLinks.map((link, index) => {
      if (link.path !== '/cart') {
        return (
          <li key={index}>
            <Link
              className={(location.pathname === link.path && 'active') || ''}
              to={link.path}>
              {link.title}
            </Link>
          </li>
        );
      }
    })}
    <li>
      <Link
        className={(location.pathname === menuLinks.path && 'active') || ''}
        to="/cart">
        <MdShoppingCart />
        <div className="shopping_cart_products">{cartProducts}</div>
      </Link>
    </li>
  </ul>
);

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
