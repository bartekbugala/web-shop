import axios from 'axios';
import { API_URL } from '../config';
import * as actions from './reduxActions';

//// Thunks
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(actions.startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(actions.loadProducts(res.data));
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const loadSingleProductRequest = id => {
  return async dispatch => {
    dispatch(actions.startRequest());
    try {
      let res = await axios.get(`${API_URL}/products/${id}`);
      dispatch(actions.loadSingleProduct(res.data));
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const loadDiscountRequest = code => {
  return async dispatch => {
    dispatch(actions.startRequest());
    try {
      let res = await axios.get(`${API_URL}/discount/${code}`);
      let payload = res ? res.data : 0;
      dispatch(actions.loadDiscount(payload || 0));
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const loadProductsByPageRequest = (
  page = 1,
  productsPerPage = 6,
  sortParam = null
) => {
  return async dispatch => {
    dispatch(actions.startRequest());
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
      dispatch(actions.loadProductsByPage(payload));
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const loadSortedProductsByPageRequest = (
  page = 1,
  productsPerPage = 6,
  sortParam = null
) => {
  return async dispatch => {
    dispatch(actions.startRequest());
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
      dispatch(actions.changeSorting(sortParam));
      dispatch(actions.loadProductsByPage(payload));
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const loadRandomProductRequest = () => {
  return async dispatch => {
    dispatch(actions.startRequest());
    try {
      let res = await axios.get(`${API_URL}/products/random`);
      dispatch(actions.loadRandomProduct(res.data));
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const addToCartRequest = (cart, product) => {
  const { id } = product;
  return async dispatch => {
    dispatch(actions.startRequest());
    try {
      const res = await axios.get(`${API_URL}/products/${id}`);
      const result = cart.find(el => el.id === id);
      if (result) {
        const currentIndex = cart.findIndex(el => el.id === id);
        cart[currentIndex].amount +=
          res.data.amount > cart[currentIndex].amount ? 1 : 0;
        dispatch(actions.updateCart(cart));
      } else {
        if (res.data.amount > 0) {
          dispatch(actions.addToCart(product));
        } else {
          throw new Error('Not enough items in stock');
        }
      }
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const removeOneFromCart = (cart, product, removeAll) => {
  const { id } = product;
  return dispatch => {
    dispatch(actions.startRequest());
    try {
      const result = cart.find(el => el.id === id);
      const currentIndex = cart.findIndex(el => el.id === id);
      if (result && !removeAll) {
        cart[currentIndex].amount -= cart[currentIndex].amount > 0 ? 1 : 0;
        dispatch(actions.updateCart(cart));
      } else if (result && removeAll) {
        dispatch(actions.updateCart(cart.filter(el => el.id !== id)));
      }
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(e.message));
    }
  };
};

export const removeProductFromCart = (cart, product) => {
  const { id } = product;
  return dispatch => {
    const currentCart = cart.filter(el => el.id !== id);
    dispatch(actions.updateCart(currentCart));
  };
};

export const updateProductRequest = (product, id) => {
  return async dispatch => {
    dispatch(actions.startUpdateRequest());
    try {
      await axios.patch(`${API_URL}/products/${id}`, product);
      dispatch(actions.endUpdateRequest());
    } catch (e) {
      dispatch(actions.errorUpdateRequest(e.message));
    }
  };
};

export const addProductRequest = product => {
  return async dispatch => {
    dispatch(actions.startRequest());
    try {
      await axios.post(`${API_URL}/products`, product);
      dispatch(actions.endRequest());
    } catch (e) {
      dispatch(actions.errorRequest(JSON.stringify(e)));
    }
  };
};

export const deleteProductRequest = id => {
  return async dispatch => {
    dispatch(actions.startUpdateRequest());
    try {
      await axios.delete(`${API_URL}/products/${id}`);
      dispatch(actions.endUpdateRequest());
    } catch (e) {
      dispatch(actions.errorUpdateRequest(e.response));
    }
  };
};

export const countCartProducts = cart => {
  return dispatch => {
    let products = 0;
    cart.forEach(el => {
      products += el.amount;
    });
    dispatch(actions.updateCartCount(products));
  };
};

export const cleanUpCart = cart => {
  return dispatch => {
    const payload = cart.filter(el => {
      return el.amount !== 0;
    });
    dispatch(actions.removeZeroAmountProducts(payload));
  };
};
