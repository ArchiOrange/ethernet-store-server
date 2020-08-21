MongoClient = require('../db')
exports.addCategory = function (category,cb) {
  MongoClient.dbo.collection("category").insertOne(category,function (err,res) {
    if(err) {
      throw err
      cb(err)
    };
  });
}
