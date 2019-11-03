// import model
const Product = require('../models/product.model');
const uuid = require('uuid');

// get all products
exports.getProducts = async (req, res) => {
  try {
    res.status(200).json(await Product.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single product
exports.getSingleProduct = async (req, res) => {
  try {
    res.status(200).json(await Product.findOne({ id: req.params.id }));
  } catch (err) {
    res.status(500).res.json(err);
  }
};

// get random product
exports.getRandomProduct = async (req, res) => {
  try {
    Product.countDocuments().exec(function(err, count) {
      const random = Math.floor(Math.random() * count);
      Product.findOne()
        .skip(random)
        .exec(function(err, result) {
          res.status(200).json(result);
        });
    });
  } catch (err) {
    res.status(500).res.json(err);
  }
};

// get products by range
exports.getProductsByRange = async function(req, res) {
  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);
    const products = await Product.find()
      .skip(startAt)
      .limit(limit);
    // return total amount of documents in collection
    const amount = await Product.countDocuments();

    // response: products within range and total amount of products
    res.status(200).json({ products, amount });
  } catch (err) {
    res.status(500).json(err);
  }
};

//add new product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, img, amount } = req.body;
    let newProduct = new Product();
    newProduct.name = name;
    newProduct.price = price;
    newProduct.img = img;
    newProduct.amount = amount;
    newProduct.id = uuid();

    const productSaved = await newProduct.save();
    res.status(200).json(productSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { name, price, img, amount } = req.body;
    const productUpdated = await Product.findOneAndUpdate(
      { id: req.params.id },
      { name: name, price: price, img: img, amount: amount }
    );
    res.status(200).json(productUpdated);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productDeleted = await Product.findOneAndDelete({ id: req.params.id });
    if (productDeleted === null) {
      let noProduct = { error: 'already removed or not in database' };
      res.status(404).json(noProduct);
    } else res.status(200).json(productDeleted);
  } catch (err) {
    res.status(500).json(err);
  }
};
