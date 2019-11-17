//// Initial state
const initialState = {
  sortParam: 'default',
  menuLinks: [
    { path: '/', title: 'Home' },
    { path: '/faq', title: 'Faq' },
    { path: '/terms', title: 'Terms' },
    { path: '/contact', title: 'Contact' },
    { path: '/cart', title: 'Cart' }
  ],
  data: [],
  cart: [],
  cartProducts: 0,
  discountCode: '',
  discount: 0,
  singleProduct: {},
  updateRequest: {
    pending: false,
    error: null,
    success: null
  },
  productsPerPage: 10,
  presentPage: 1,
  request: {
    pending: false,
    error: null,
    success: null
  }
};

export default initialState;
