const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Discount = new Schema({
  code: { type: 'String', required: true },
  rate: { type: 'Number', required: true },
  products: { type: 'Array', required: false }
});

module.exports = mongoose.model('Discount', Discount);
