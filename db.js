const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  exports.dbo = db.db("ethernetStore");
  var www = require('./bin/www');
});
