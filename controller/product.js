const ModelProduct  = require('../model/product')
const ModelCategory = require('../model/category')
const Fs = require("fs");
function prefetchDataForUpdateDefultValue(category, product) {
  let categoryUpdate = {
    $max: {},
    $min: {},
    $addToSet: {}
  }
  for (let  i = 0; i < category.specifications.length; i++) {
    if(category.specifications[i].defaultValue.constructor === Object){
      categoryUpdate.$min[`specifications.${i}.defaultValue.min`] =  product.specifications[i].value
      categoryUpdate.$max[`specifications.${i}.defaultValue.max`] =  product.specifications[i].value
    }else{
      categoryUpdate.$addToSet[`specifications.${i}.defaultValue`] = product.specifications[i].value
    }
  }
  return categoryUpdate
}
function validation(product) {
  let errorEntryData  = []
  for (var variable in product) {
    if (product[variable] == '') {
      errorEntryData.push(`${variable}: property is empty`)
    }
  }
  for (var i = 0; i < product.specifications.length; i++) {

    if (product.specifications[i].value === '') {
      errorEntryData.push(`${product.specifications[i].name}: is empty`)
    }
  }
  if( 0 == errorEntryData.length){
    product.price = Number(product.price)
    let specifications = product.specifications.map(function (specification) {
        delete specification.defaultValue
        if(isNaN(Number(specification.value))){
          return(specification)
        }
        else{
          specification.value = Number(specification.value)
          return(specification)
        }
      })
      product.specifications = specifications
      return(product)
  }else{
    console.error(errorEntryData);
    throw Error("errorEntryData")
  }
}
exports.addProduct = function (req, res) {
  // res.json(req.body.product)
  // let product = JSON.parse(req.body.product)
  // let img =  req.files.map(function (item,i) {
  //     return item.filename
  //   })
  //   product.img = img
  //   try {
  //     validation(product)
  //   } catch (e) {
  //     req.files.map(function (item) {
  //       Fs.unlink(item.path, (err) => {
  //         if (err) console.log(err); // если возникла ошибка
  //         else console.log(item.filename);
  //       });
  //       console.log(item);
  //     })
  //   }
  //     ModelProduct.addProduct(product, function (err) {
  //       if (err){
  //         req.files.map(function (item) {
  //           Fs.unlink(item.path, (err) => {
  //             if (err) console.log(err); // если возникла ошибка
  //             else console.log(item.filename);
  //           });
  //           // console.log(item);
  //         })
  //         res.json(err)
  //         throw err
  //       }
        res.json({err:null})
  //     })
      // ModelCategory.findSpecifications(product.category, function (err,category) {
      //   if(err) throw err
      //   ModelCategory.updateDefultValue(product.category,prefetchDataForUpdateDefultValue(category,product),function (err) {
      //     if(err) throw err
      //   })
      // })
}
exports.getProduct = function (req,res) {
  let id = req.body.id
  ModelProduct.findProduct(id, function (err,product) {
    if (err) {
      res.json(err)
    }
    res.json(product)
  })
}
exports.getCatalog = function (req,res) {
  let idCategory = req.body.id
  ModelProduct.findCatalog(idCategory, function (err,catalog) {
    console.log(catalog);
    if(err){
      res.json(err)
    }
    res.json(catalog)
  })
}
