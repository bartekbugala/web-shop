const express = require('express');
const router = express.Router();

const DiscountController = require('../controllers/discount.controller');

// get single discount
router.route('/discount/:code').get(DiscountController.getSingleDiscount);

module.exports = router;
