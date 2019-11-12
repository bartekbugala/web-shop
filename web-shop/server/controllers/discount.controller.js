// import model
const Discount = require('../models/discount.model');

// get all discounts
exports.getDiscounts = async (req, res) => {
  try {
    res.status(200).json(await Discount.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single discount
exports.getSingleDiscount = async (req, res) => {
  try {
    res.status(200).json(await Discount.findOne({ code: req.params.code }));
  } catch (err) {
    res.status(500).res.json(err);
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const discountDeleted = await Discount.findOneAndDelete({
      code: req.params.code
    });
    if (discountDeleted === null) {
      let noDiscount = { error: 'already removed or not in database' };
      res.status(404).json(noDiscount);
    } else res.status(200).json(discountDeleted);
  } catch (err) {
    res.status(500).json(err);
  }
};
