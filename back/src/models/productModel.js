const csv =require('csvtojson')

const csvFilePath = './src/database/products.csv';

const getAll = async () => {
  const products = await csv().fromFile(csvFilePath);
  
  return products;
}

module.exports = {
  getAll
}