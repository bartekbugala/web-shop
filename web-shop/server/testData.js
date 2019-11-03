const Post = require('./models/product.model');
const uuid = require('uuid');

const loadTestData = async () => {
  const products = [
    { id: uuid(), name: 'Layout', price: 10000, img: './images/placeholder.png', amount: 1 },
    { id: uuid(), name: 'Script', price: 10, img: './images/placeholder.png', amount: 10 },
    { id: uuid(), name: 'Website', price: 109, img: './images/placeholder.png', amount: 2 },
    { id: uuid(), name: 'Mongo Database', price: 100.14, img: './images/placeholder.png', amount: 10 },
    { id: uuid(), name: 'Logo', price: 100.77, img: './images/placeholder.png', amount: 15 },
    { id: uuid(), name: 'Ad', price: 100.22, img: './images/placeholder.png', amount: 1 },
    { id: uuid(), name: 'React-App', price: 100.03, img: './images/placeholder.png', amount: 0 },
    { id: uuid(), name: 'Design', price: 100.1, img: './images/placeholder.png', amount: 3 },
    { id: uuid(), name: 'Wireframe', price: 99999, img: './images/placeholder.png', amount: 4 },
    { id: uuid(), name: 'Gallery', price: 1.0, img: './images/placeholder.png', amount: 5 },
    { id: uuid(), name: 'Slider', price: 100, img: './images/placeholder.png', amount: 6 },
    { id: uuid(), name: 'Api', price: 100, img: './images/placeholder.png', amount: 7 },
    { id: uuid(), name: 'MySQL Database', price: 100, img: './images/placeholder.png', amount: 30000 },
    { id: uuid(), name: 'Deployment', price: 100, img: './images/placeholder.png', amount: 3 }
  ];

  try {
    let counter = await Post.countDocuments();
    if (counter === 0) {
      console.log('No posts. Loading data...');
      await Post.create(products);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};

module.exports = loadTestData;
