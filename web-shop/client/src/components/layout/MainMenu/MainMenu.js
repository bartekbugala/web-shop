import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const MainMenu = ({ menuLinks, location }) => (
  <ul className="main-menu">
    {menuLinks.map((link, index) => (
      <li key={index}>
        <Link className={(location.pathname === menuLinks.path && 'active') || ''} to={link.path}>
          {link.title}
        </Link>
      </li>
    ))}
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

export default withRouter(props => <MainMenu {...props} />);
