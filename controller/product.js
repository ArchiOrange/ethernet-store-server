const Model  = require('../model/product')
function validation(product) {
  let errorEntryData  = []
  for (var variable in product) {
    if (product[variable] == '') {
      errorEntryData.push(`${variable}: property is empty`)
    }
  }
  for (var i = 0; i < product.specifications.length; i++) {

    if (product.specifications[i].value == '') {
      errorEntryData.push(`${product.specifications[i].name}: is empty`)
    }
  }
  if(!errorEntryData.length){
    product.price = Number(product.price)
    let specifications = product.specifications.map(function (item) {
        if(isNaN(Number(item.value))){
          return(item.value)
        }
        else{
          return(Number(item.value))
        }
      })
      product.specifications = specifications
      return(product)
  }else{
    console.error(Error("errorEntryData"),errorEntryData);
  }
}
exports.addProduct = function (req, res) {
  let product = JSON.parse(req.body.product)
  let img =  req.files.map(function (item,i) {
      return item.filename
    })
    product.img = img

    Model.addProduct(validation(product), function (err) {
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
