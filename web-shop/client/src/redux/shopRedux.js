const initialState = {
  menuLinks: [
    { path: '/', title: 'Home' },
    { path: '/faq', title: 'Faq' },
    { path: `/terms`, title: 'Terms' },
    { path: '/contact', title: 'Contact' }
  ]
};

// Selectors
export const getMenuLinks = ({ shop }) => shop.menuLinks;

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
