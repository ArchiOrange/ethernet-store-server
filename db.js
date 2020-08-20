const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
exports.connect = function () {
  let dbConect
  if(dbConect){
    return dbConect
  }
  MongoClient.connect(url, function(err, db) {
    console.log(db);
  if (err) throw err;
  var dbo = db.db("ethernt-store");
  dbConect = dbo
  return dbConect

});
}
