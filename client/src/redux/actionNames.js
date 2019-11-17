// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const LOAD_DISCOUNT = createActionName('LOAD_DISCOUNT');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');
export const LOAD_RANDOM_PRODUCT = createActionName('LOAD_RANDOM_PRODUCT');
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const UPDATE_CART = createActionName('UPDATE_CART');
export const REMOVE_ZERO_AMOUNT_PRODUCTS = createActionName(
  'REMOVE_ZERO_AMOUNT_PRODUCTS'
);
export const UPDATE_CART_COUNT = createActionName('UPDATE_CART_COUNT');
export const CHANGE_SORTING = createActionName('CHANGE_SORTING');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const START_UPDATE_REQUEST = createActionName('START_UPDATE_REQUEST');
export const END_UPDATE_REQUEST = createActionName('END_UPDATE_REQUEST');
export const RESET_UPDATE_REQUEST = createActionName('RESET_UPDATE_REQUEST');
export const ERROR_UPDATE_REQUEST = createActionName('ERROR_UPDATE_REQUEST');
