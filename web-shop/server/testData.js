const Post = require('./models/product.model');
const uuid = require('uuid');

const loadTestData = async () => {
  const products = [
    { id: uuid(), name: 'Layout', price: 10000, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Script', price: 10, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Website', price: 109, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Mongo Database', price: 100.14, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Logo', price: 100.77, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Ad', price: 100.22, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'React-App', price: 100.03, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Design', price: 100.1, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Wireframe', price: 99999, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Gallery', price: 1.0, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Slider', price: 100, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Api', price: 100, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'MySQL Database', price: 100, img: './images/placeholder.png', amount: '' },
    { id: uuid(), name: 'Deployment', price: 100, img: './images/placeholder.png', amount: '' }
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
