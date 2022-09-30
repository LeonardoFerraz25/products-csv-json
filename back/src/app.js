const express = require('express')
const cors = require('cors')
const app = express()
const productRouter = require('./routes/productRoter');

app.use(cors());
app.use('/products', productRouter);

module.exports = app;