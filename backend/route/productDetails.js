const router = require('express').Router();
let ProductDetail = require('../model/productDetails.model');

router.route('/').get((req, res) =>{
  ProductDetail.find()
  .then(productDetails => res.json(productDetails))
  .catch(err =>
    res.status(400).json({
      message: 'Error'
    })
  );
});

router.route('/add').post((req, res) => {
  const productName = req.body.productName;
  const productPrice = req.body.productPrice;
  const productDescription = req.body.productDescription;

  const newProductDetail = new ProductDetail({
    productName,
    productPrice,
    productDescription
  });

  newProductDetail.save()
  .then(() => res.json('Product added'))
  .catch(err => res.status(400).json({
      message: 'Error'
    })
  );
  
});

router.route('/:id').get((req, res) => {
  ProductDetail.findById(req.params.id)
  .then(productDetail => res.json(productDetail))
  .catch(err =>
    res.status(400).json({
      message: 'Error'
    })
  );
});


router.route('/:id').delete((req,res) => {
  ProductDetail.findByIdAndDelete(req.params.id)
  .then(() => res.json('Product deleted.'))
  .catch(err =>res.status(400).json({
      message: 'Error'
    })
  );
  
});

router.route('/update/:id').post((req,res) => {
  ProductDetail.findById(req.params.id)
  .then(productDetail => {
    productDetail.productName = req.body.productName;
    productDetail.productPrice = req.body.productPrice;
    productDetail.productDescription = req.body.productDescription;

    productDetail.save()
    .then(() => res.json('Product detail updated.'))
    .catch(err => res.status(400).json({
        message: 'Error'
      })
    );
  });
  
});

module.exports = router;