const express = require('express')
const app = express()
const productRouter = require('./routes/productRoter');

app.use('/products', productRouter);

module.exports = app;