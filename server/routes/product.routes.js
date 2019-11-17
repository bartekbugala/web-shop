const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

//get all products
router.route('/products').get(ProductController.getProducts);

// get products by range
router
  .route('/products/range/:startAt/:limit/:sortParam')
  .get(ProductController.getProductsByRange);

// get single product
router.route('/products/:id').get(ProductController.getSingleProduct);

// find and update product
router.route('/products/:id').patch(ProductController.editProduct);

// find decreace amount of 1 product
router.route('/products/:id').put(ProductController.removeOneAmount);

// find and delete product
router.route('/products/:id').delete(ProductController.deleteProduct);

// add products
router.route('/products').post(ProductController.addProduct);

module.exports = router;
