var express = require('express');
var router = express.Router();
const Product = require('../controller/product.js')
const Category = require('../controller/category.js')
const Files = require('../controller/files')
/* GET home page. */
// const multer  =   require('multer');
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(__dirname+ '\\uploads');
//     cb(null, './uploads')
//   },
//   filename: function (req, file, cb) {
//     console.log('werrwe');
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
//
//  let upload = multer({ storage: storage }).array('filedata')


router.post('/addproduct', Files.uploads,  Product.addProduct);
router.post('/addcategory',Category.addCategory);
router.get('/getcategorys',Category.getCategorys);
router.post('/getspecifications',Category.getSpecifications);
router.post('/getproduct', Product.getProduct);
router.post('/getcatalog',Product.getCatalog);
module.exports = router;
