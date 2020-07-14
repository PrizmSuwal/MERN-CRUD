const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productPrice: {
    type: String,
    required: true
  },
  productDescription: {
    type: String
  }
});

const productDetail = mongoose.model('productDetail',productSchema);

module.exports = productDetail;