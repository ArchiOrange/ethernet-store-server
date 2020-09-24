var MongoClient = require('../db')
var {ObjectId} = require('mongodb')
exports.addProduct = function (product,cb) {
  product.dateAdd = Date.now()
  MongoClient.dbo.collection("product").insertOne(product,function (err,doc) {
    if(err) {
      throw err
      cb(err)
    };
  });
}
exports.findProduct = function (id, cb) {
  MongoClient.dbo.collection("product").findOne({_id: new ObjectId(id)},function (err,doc) {
    cb(err,doc)
  })
}
exports.findCatalog = function (id, cb) {
  MongoClient.dbo.collection("product").find({category: id}).toArray(function (err,doc) {
    cb(err,doc)
  })
}
