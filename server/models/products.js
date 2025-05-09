const mongoose = require('mongoose');
const { products } = require('../data/products');


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  ],
  specifications: {
    type: Map,
    of: String,
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true, // Ensure SKU is unique across all products
  },
});

const Products=  mongoose.model('Product', productSchema);
module.exports = Products;



