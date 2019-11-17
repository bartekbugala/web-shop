//// Reducer
import initialState from './initialState.js';
import * as actionNames from './actionNames';

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case actionNames.LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case actionNames.LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case actionNames.REMOVE_ZERO_AMOUNT_PRODUCTS:
      return { ...statePart, cart: action.payload };
    case actionNames.LOAD_DISCOUNT:
      return {
        ...statePart,
        discount: action.payload.rate,
        discountCode: action.payload.code
      };
    case actionNames.LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.products]
      };
    case actionNames.LOAD_RANDOM_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case actionNames.ADD_TO_CART:
      return {
        ...statePart,
        cart: [...statePart.cart, { ...action.payload, amount: 1 }]
      };
    case actionNames.UPDATE_CART:
      return { ...statePart, cart: action.payload };
    case actionNames.UPDATE_CART_COUNT:
      return { ...statePart, cartProducts: action.payload };
    case actionNames.CHANGE_SORTING:
      return { ...statePart, sortParam: action.payload };
    case actionNames.START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case actionNames.END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case actionNames.RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case actionNames.ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: true }
      };
    case actionNames.START_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: true, error: null, success: null }
      };
    case actionNames.END_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: true }
      };
    case actionNames.RESET_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: null }
      };
    case actionNames.ERROR_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: action.error, success: true }
      };
    default:
      return statePart;
  }
}
