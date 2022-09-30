const express = require('express');

const productRouter = express.Router();

const productController = require('../controller/productController')

productRouter.get('/', productController.getAll);

module.exports = productRouter;