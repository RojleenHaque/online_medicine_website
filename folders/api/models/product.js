//models/product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount_price: {
    type: String,
    required: true,
  },
  image: {
    type: String,  // Image URL or file path
  },
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);
export default productModel;


