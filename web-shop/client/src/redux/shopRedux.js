import axios from 'axios';
import { API_URL } from '../config';

//// Initial state
const initialState = {
  logo: { path: `/images/creativity_logo.jpg`, alt: 'Creativity' },
  sortParam: 'default',
  menuLinks: [
    { path: '/', title: 'Home' },
    { path: '/faq', title: 'Faq' },
    { path: `/terms`, title: 'Terms' },
    { path: '/contact', title: 'Contact' },
    { path: '/cart', title: 'Cart' }
  ],
  data: [],
  cart: [
    {
      id: '09893eda-1d38-48a2-8db4-1ed714c29915',
      name: 'A-Layout',
      price: 10000,
      img: '/images/placeholder.png',
      amount: 2,
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    }
  ],
  singleProduct: {},
  updateRequest: {
    pending: false,
    error: null,
    success: null
  },
  amount: 0,
  productsPerPage: 10,
  presentPage: 1,
  request: {
    pending: false,
    error: null,
    success: null
  }
};

//// Selectors
export const getMenuLinks = ({ shop }) => shop.menuLinks;
export const getLogo = ({ shop }) => shop.logo;
export const getProducts = ({ shop }) => shop.data;
export const getSingleProduct = ({ shop }) =>
  shop.singleProduct === null ? {} : shop.singleProduct;
export const countProducts = ({ shop }) => shop.amount;
export const getRequest = ({ shop }) => shop.request;
export const getUpdateRequest = ({ shop }) => shop.updateRequest;
export const getPages = ({ shop }) =>
  Math.ceil(shop.amount / shop.productsPerPage);
export const getCart = ({ shop }) => shop.cart;
export const getSort = ({ shop }) => shop.sortParam;

//// Thunks
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSingleProductRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products/${id}`);
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductsByPageRequest = (
  page = 1,
  productsPerPage = 6,
  sortParam = null
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(
        `${API_URL}/products/range/${startAt}/${limit}/${sortParam}`
      );

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page
      };
      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSortedProductsByPageRequest = (
  page = 1,
  productsPerPage = 6,
  sortParam = null
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;
      let res = await axios.get(
        `${API_URL}/products/range/${startAt}/${limit}/${sortParam}`
      );
      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page
      };
      dispatch(changeSorting(sortParam));
      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadRandomProductRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products/random`);

      dispatch(loadRandomProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addToCartRequest = (cart, product) => {
  const { id, name, img, description, tag } = product;
  return async dispatch => {
    dispatch(startRequest());
    try {
      const result = cart.find(el => el.id === id);
      if (result) {
        axios.get(`${API_URL}/products/${id}`).then(res => {
          const payload = cart;
          const currentIndex = cart.findIndex(el => el.id === id);
          function go() {
            res.data.amount < 0
              ? (payload[currentIndex].amount = 0)
              : (payload[currentIndex].amount += 1);
            payload[currentIndex].name = name;
            payload[currentIndex].img = img;
            payload[currentIndex].description = description;
            payload[currentIndex].tag = tag;
            dispatch(updateAmountInCart(payload));
          }
        });
      } else {
        dispatch(addToCart(product));
      }
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const updateCart = (cart, product) => {
  const { id, name, img, description, tag } = product;
  return async dispatch => {
    dispatch(startRequest());
    try {
      const result = cart.find(el => el.id === id);
      //let res = await axios.get(`${API_URL}/products/${id}`);
      //console.log(res);
      if (result) {
        const payload = cart;
        const currentIndex = cart.findIndex(el => el.id === id);
        /* res.data.amount < 0 ? payload[currentIndex].amount = 0 :  */ payload[
          currentIndex
        ].amount += 1;
        payload[currentIndex].name = name;
        payload[currentIndex].img = img;
        payload[currentIndex].description = description;
        payload[currentIndex].tag = tag;
        dispatch(updateAmountInCart(payload));
      } else {
        dispatch(addToCart(product));
      }
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const removeFromCartRequest = (cart, product) => {
  const { id, name, img, description, tag } = product;
  return async dispatch => {
    dispatch(startRequest());
    try {
      const result = cart.find(el => el.id === id);
      if (result) {
        const payload = cart;
        const currentIndex = cart.findIndex(el => el.id === id);
        payload[currentIndex].amount -= 1;
        payload[currentIndex].name = name;
        payload[currentIndex].img = img;
        payload[currentIndex].description = description;
        payload[currentIndex].tag = tag;
        dispatch(updateAmountInCart(payload));
      } else {
        dispatch(addToCart(product));
      }
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const updateProductRequest = (product, id) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.patch(`${API_URL}/products/${id}`, product);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.message));
    }
  };
};

export const addProductRequest = product => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/products`, product);
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(JSON.stringify(e)));
    }
  };
};

export const deleteProductRequest = id => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.delete(`${API_URL}/products/${id}`);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.response));
    }
  };
};

//// Actions
// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action exports
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');
export const LOAD_RANDOM_PRODUCT = createActionName('LOAD_RANDOM_PRODUCT');

export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const CHANGE_SORTING = createActionName('CHANGE_SORTING');
export const UPDATE_AMOUNT_IN_CART = createActionName('UPDATE_AMOUNT_IN_CART');

export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const START_UPDATE_REQUEST = createActionName('START_UPDATE_REQUEST');
export const END_UPDATE_REQUEST = createActionName('END_UPDATE_REQUEST');
export const RESET_UPDATE_REQUEST = createActionName('RESET_UPDATE_REQUEST');
export const ERROR_UPDATE_REQUEST = createActionName('ERROR_UPDATE_REQUEST');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({
  payload,
  type: LOAD_SINGLE_PRODUCT
});
export const loadProductsByPage = payload => ({
  payload,
  type: LOAD_PRODUCTS_PAGE
});
export const loadRandomProduct = payload => ({
  payload,
  type: LOAD_RANDOM_PRODUCT
});

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const changeSorting = payload => ({ payload, type: CHANGE_SORTING });
export const updateAmountInCart = payload => ({
  payload,
  type: UPDATE_AMOUNT_IN_CART
});

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const startUpdateRequest = () => ({ type: START_UPDATE_REQUEST });
export const endUpdateRequest = () => ({ type: END_UPDATE_REQUEST });
export const resetUpdateRequest = () => ({ type: RESET_UPDATE_REQUEST });
export const errorUpdateRequest = error => ({
  error,
  type: ERROR_UPDATE_REQUEST
});

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.products]
      };
    case LOAD_RANDOM_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case ADD_TO_CART:
      return {
        ...statePart,
        cart: [...statePart.cart, { ...action.payload, amount: 1 }]
      };
    case CHANGE_SORTING:
      return { ...statePart, sortParam: action.payload };
    case UPDATE_AMOUNT_IN_CART:
      return { ...statePart, cart: action.payload };
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: true }
      };
    case START_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: true, error: null, success: null }
      };
    case END_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: true }
      };
    case RESET_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: null }
      };
    case ERROR_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: action.error, success: true }
      };
    default:
      return statePart;
  }
}
