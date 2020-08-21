var express = require('express');
var router = express.Router();
const Product = require('../controller/product.js')
const Category = require('../controller/category.js')
/* GET home page. */
router.post('/addproduct', Product.addProduct);
router.post('/addcategory',Category.addCategory);
module.exports = router;
