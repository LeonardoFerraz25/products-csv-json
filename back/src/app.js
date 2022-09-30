const express = require('express')
const app = express()
const productRouter = require('./routes/productRoter');

app.get('/products', productRouter);

module.exports = app;