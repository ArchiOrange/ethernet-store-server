const Model  = require('../model/product')

exports.addProduct = function (req, res) {
  let product = JSON.parse(req.body.product)
  let img =  req.files.map(function (item,i) {
      return item.filename
    })
    product.img = img
    Model.addProduct(product, function (err) {
      if (err) {
        res.json(err)
      }
      res.json(product)
    })
}
exports.getProduct = function (req,res) {
  let id = req.body.id
  Model.findProduct(id, function (err,product) {
    if (err) {
      res.json(err)
    }
    res.json(product)
  })
}
exports.getCatalog = function (req,res) {
  let idCategory = req.body.id
  Model.findCatalog(idCategory, function (err,catalog) {
    console.log(catalog);
    if(err){
      res.json(err)
    }
    res.json(catalog)
  })
}
