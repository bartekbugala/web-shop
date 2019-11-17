// import model
const Discount = require('../models/discount.model');

// get single discount
exports.getSingleDiscount = async (req, res) => {
  try {
    let responseDiscount = await Discount.findOne({ code: req.params.code });
    if (responseDiscount) {
      res.status(200).json(responseDiscount);
    } else {
      res.status(200).json('null');
    }
  } catch (err) {
    res.status(500).res.json(err);
  }
};
