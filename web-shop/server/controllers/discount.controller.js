// import model
const Discount = require('../models/discount.model');

// get single discount
exports.getSingleDiscount = async (req, res) => {
  try {
    res.status(200).json(await Discount.findOne({ code: req.params.code }));
  } catch (err) {
    res.status(500).res.json(err);
  }
};
