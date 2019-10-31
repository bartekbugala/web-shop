import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import Logo from '../../common/Logo/Logo';

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
      <header>
        <Logo />
        <nav>
          <MainMenu links={links} />
        </nav>
      </header>
    );
  }
}
export default NavBar;
