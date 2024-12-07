const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const testProduct = async () => {
  const newProduct = new Product({
    name: 'تسمه تایم',
    description: 'تسمه تایم مناسب برای مدل ال 90',
    price: 500000,
    stock: 10,
    category: 'لوازم موتوری',
    model: 'ال 90',
  });
  await newProduct.save();
  console.log('Product saved:', newProduct);
  mongoose.connection.close();
};

testProduct();
