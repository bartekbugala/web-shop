const initialState = {
  logo: { path: './images/creativity_logo.jpg', alt: 'Creativity' },
  menuLinks: [
    { path: '/', title: 'Home' },
    { path: '/faq', title: 'Faq' },
    { path: `/terms`, title: 'Terms' },
    { path: '/contact', title: 'Contact' },
    { path: '/cart', title: 'Cart' }
  ]
};

// Selectors
export const getMenuLinks = ({ shop }) => shop.menuLinks;
export const getLogo = ({ shop }) => shop.logo;

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
