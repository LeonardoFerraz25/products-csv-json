const productServices = require('../services/productService');

const SERVER_ERROR = {"message": "Internal server error"}

const getAll = async (_req, res) => {
  try {
    const products = await productServices.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_ERROR);
  }
}

module.exports = {
  getAll
}