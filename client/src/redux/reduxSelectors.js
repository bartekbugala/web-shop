//// Selectors
export const getMenuLinks = ({ shop }) => shop.menuLinks;
export const getLogo = ({ shop }) => shop.logo;
export const getProducts = ({ shop }) => shop.data;
export const getSingleProduct = ({ shop }) =>
  shop.singleProduct === null ? {} : shop.singleProduct;
export const getRequest = ({ shop }) => shop.request;
export const getUpdateRequest = ({ shop }) => shop.updateRequest;
export const getPages = ({ shop }) =>
  Math.ceil(shop.amount / shop.productsPerPage);
export const getCart = ({ shop }) => shop.cart;
export const getCartProducts = ({ shop }) => shop.cartProducts;
export const getDiscount = ({ shop }) => shop.discount;
export const getDiscountCode = ({ shop }) => shop.discountCode;
export const getSort = ({ shop }) => shop.sortParam;
