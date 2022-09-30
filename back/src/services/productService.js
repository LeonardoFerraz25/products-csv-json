const productModel = require('../models/productModel');

const getAll = async () => {
  const products = productModel.getAll();
  return products;
}

module.exports = {
  getAll
}