var MongoClient = require('../db')
var {ObjectId} = require('mongodb')
exports.addCategory = function (category,cb) {
  category.dateAdd = Date.now()
  MongoClient.dbo.collection("category").insertOne(category,function (err,res) {
    if(err) {
      throw err
    };
    cb(err,res.ops)
  });
}
exports.findCategorys = function (cb) {
  MongoClient.dbo.collection("category").find({}).toArray(function (err,result) {
  cb(err, result)
  })
}
exports.findSpecifications = function (id, cb) {
  let o_id = new ObjectId(id)
  MongoClient.dbo.collection("category").findOne({_id: o_id},function (err,result) {
    console.log(result);
  cb(err, result)
  })
}
exports.updateDefultValue = function (idCategory, updateData) {
  console.log(idCategory);
  MongoClient.dbo.collection("category").updateOne({_id: new ObjectId(idCategory)}, updateData, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  })
}
