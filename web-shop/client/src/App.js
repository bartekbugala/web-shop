import React from 'react';
import { Switch, Route } from 'react-router-dom';

// layout
import MainLayout from './components/layout/MainLayout/MainLayout';

// routes to pages
import Home from './components/pages/Home/HomePage';
import Faq from './components/pages/Faq/FaqPage';
import Terms from './components/pages/Terms/TermsPage';
import Contact from './components/pages/Contact/ContactPage';
import Cart from './components/pages/Cart/Cart';
import NotFound from './components/pages/NotFound/NotFoundPage';
import { getMenuLinks } from './redux/shopRedux';
import { connect } from 'react-redux';
import { capitalizeString } from './utils/capitalizeString';

const mapStateToProps = state => ({
  menuLinks: getMenuLinks(state)
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { menuLinks } = this.props;

    return (
      <div>
        <MainLayout>
          <Switch>
            {/*             {menuLinks.map((link, i) => (
              <Route key={i} path={link.path} component={capitalizeString(link.title)} />
            ))} */}
            <Route path="/" exact component={Home} />
            <Route path="/faq" exact component={Faq} />
            <Route path="/terms" exact component={Terms} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
