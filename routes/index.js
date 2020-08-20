var express = require('express');
var router = express.Router();
const Product = require('../controller/product.js')

/* GET home page. */
router.post('/addproduct', Product.addProduct);

module.exports = router;
