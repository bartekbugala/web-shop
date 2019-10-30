import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';

class NavBar extends React.Component {
  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/faq', title: 'Faq' },
      { path: `/terms`, title: 'Terms' },
      { path: '/contact', title: 'Contact' }
    ]
  };

  render() {
    const { links } = this.state;

    return (
      <nav>
        <MainMenu links={links} />
      </nav>
    );
  }
}
export default NavBar;
