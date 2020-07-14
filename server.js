require('./backend/model/productdb.model');

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const productDetailsRouter = require('./backend/route/productDetails');
app.use('/product',productDetailsRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});