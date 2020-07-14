const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productDB', { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
  if (!err) {
    console.log('MongoDB Connection Successful')
  }
  else {
    console.log('MongoDB Connection failed.')
  }
});