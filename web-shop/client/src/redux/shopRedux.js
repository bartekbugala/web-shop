const initialState = {
  logo: { path: './images/creativity_logo.jpg', alt: 'Creativity' },
  menuLinks: [
    { path: '/', title: 'Home' },
    { path: '/faq', title: 'Faq' },
    { path: `/terms`, title: 'Terms' },
    { path: '/contact', title: 'Contact' },
    { path: '/cart', title: 'Cart' }
  ],
  products: [
    { id: '0-id1', name: 'Layout', price: 10000, img: './images/placeholder.png', amount: '' },
    { id: '0-id2', name: 'Script', price: 10, img: './images/placeholder.png', amount: '' },
    { id: '0-id3', name: 'Website', price: 109, img: './images/placeholder.png', amount: '' },
    { id: '0-id4', name: 'Mongo Database', price: 100.14, img: './images/placeholder.png', amount: '' },
    { id: '0-id5', name: 'Logo', price: 100.77, img: './images/placeholder.png', amount: '' },
    { id: '0-id6', name: 'Ad', price: 100.22, img: './images/placeholder.png', amount: '' },
    { id: '0-id7', name: 'React-App', price: 100.03, img: './images/placeholder.png', amount: '' },
    { id: '0-id8', name: 'Design', price: 100.1, img: './images/placeholder.png', amount: '' },
    { id: '0-id9', name: 'Wireframe', price: 99999, img: './images/placeholder.png', amount: '' },
    { id: '0-id10', name: 'Gallery', price: 1.0, img: './images/placeholder.png', amount: '' },
    { id: '0-id11', name: 'Slider', price: 100, img: './images/placeholder.png', amount: '' },
    { id: '0-id12', name: 'Api', price: 100, img: './images/placeholder.png', amount: '' },
    { id: '0-id13', name: 'MySQL Database', price: 100, img: './images/placeholder.png', amount: '' },
    { id: '0-id14', name: 'Deployment', price: 100, img: './images/placeholder.png', amount: '' }
  ]
};

// Selectors
export const getMenuLinks = ({ shop }) => shop.menuLinks;
export const getLogo = ({ shop }) => shop.logo;
export const getProducts = ({ shop }) => shop.products;

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
