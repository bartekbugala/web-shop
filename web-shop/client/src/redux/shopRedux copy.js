import axios from 'axios';
import { API_URL, BASE_URL } from '../config';

//// Selectors
export const getMenuLinks = ({ shop }) => shop.menuLinks;
export const getLogo = ({ shop }) => shop.logo;
export const getProducts = ({ shop }) => shop.data;
export const getSingleProduct = ({ shop }) => (shop.singleProduct === null ? {} : shop.singleProduct);
export const countProducts = ({ shop }) => shop.amount;
export const getRequest = ({ shop }) => shop.request;
export const getUpdateRequest = ({ shop }) => shop.updateRequest;
export const getPages = ({ shop }) => Math.ceil(shop.amount / shop.productsPerPage);
export const getCart = ({ shop }) => shop.cart;

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

export const loadProductsByPageRequest = (page = 1, productsPerPage = 6) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(`${API_URL}/products/range/${startAt}/${limit}`);

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
  }; ``
};

export const addToCartRequest = (id, cart) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const result = cart.find(el => el.id === id)
      if (result) {
        const payload = cart;
        const currentIndex = cart.findIndex(el => el.id === id)
        payload[currentIndex].amount += 1;
        dispatch(updateAmountInCart(payload))
      } else {
        dispatch(addToCart(id))
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

//// Initial state
const initialState = {
  logo: { path: `/images/creativity_logo.jpg`, alt: 'Creativity' },
  menuLinks: [
    { path: '/', title: 'Home' },
    { path: '/faq', title: 'Faq' },
    { path: `/terms`, title: 'Terms' },
    { path: '/contact', title: 'Contact' },
    { path: '/cart', title: 'Cart' }
  ],
  data: [],
  cart: [],
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
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });
export const loadRandomProduct = payload => ({ payload, type: LOAD_RANDOM_PRODUCT });

export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const updateAmountInCart = payload => ({ payload, type: UPDATE_AMOUNT_IN_CART });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const startUpdateRequest = () => ({ type: START_UPDATE_REQUEST });
export const endUpdateRequest = () => ({ type: END_UPDATE_REQUEST });
export const resetUpdateRequest = () => ({ type: RESET_UPDATE_REQUEST });
export const errorUpdateRequest = error => ({ error, type: ERROR_UPDATE_REQUEST });

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
      return { ...statePart, cart: [...statePart.cart, { id: action.payload.id, amount: action.payload.amount }] };
    case UPDATE_AMOUNT_IN_CART:
      return { ...statePart, cart: action.payload };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: true } };
    case START_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: true, error: null, success: null } };
    case END_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: false, error: null, success: true } };
    case RESET_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: false, error: null, success: null } };
    case ERROR_UPDATE_REQUEST:
      return { ...statePart, updateRequest: { pending: false, error: action.error, success: true } };
    default:
      return statePart;
  }
}
