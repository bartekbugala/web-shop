import * as actionNames from './actionNames';

//// Actions
export const loadProducts = payload => ({
  payload,
  type: actionNames.LOAD_PRODUCTS
});
export const loadSingleProduct = payload => ({
  payload,
  type: actionNames.LOAD_SINGLE_PRODUCT
});
export const loadDiscount = payload => ({
  payload,
  type: actionNames.LOAD_DISCOUNT
});
export const loadProductsByPage = payload => ({
  payload,
  type: actionNames.LOAD_PRODUCTS_PAGE
});
export const loadRandomProduct = payload => ({
  payload,
  type: actionNames.LOAD_RANDOM_PRODUCT
});

export const addToCart = payload => ({
  payload,
  type: actionNames.ADD_TO_CART
});
export const removeZeroAmountProducts = payload => ({
  payload,
  type: actionNames.REMOVE_ZERO_AMOUNT_PRODUCTS
});
export const changeSorting = payload => ({
  payload,
  type: actionNames.CHANGE_SORTING
});
export const updateCart = payload => ({
  payload,
  type: actionNames.UPDATE_CART
});
export const updateCartCount = payload => ({
  payload,
  type: actionNames.UPDATE_CART_COUNT
});

export const startRequest = () => ({ type: actionNames.START_REQUEST });
export const endRequest = () => ({ type: actionNames.END_REQUEST });
export const resetRequest = () => ({ type: actionNames.RESET_REQUEST });
export const errorRequest = error => ({
  error,
  type: actionNames.ERROR_REQUEST
});

export const startUpdateRequest = () => ({
  type: actionNames.START_UPDATE_REQUEST
});
export const endUpdateRequest = () => ({
  type: actionNames.END_UPDATE_REQUEST
});
export const resetUpdateRequest = () => ({
  type: actionNames.RESET_UPDATE_REQUEST
});
export const errorUpdateRequest = error => ({
  error,
  type: actionNames.ERROR_UPDATE_REQUEST
});
