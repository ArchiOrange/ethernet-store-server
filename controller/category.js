const Model  = require('../model/category')
exports.addCategory = function (req,res) {
  console.log(req.body);
  Model.addCategory(req.body,function (err) {
    if(!null){
      res.sendStatus(200)
    }
  })
  // res.json(req.body)
}
exports.getCategorys = function (req, res) {
  Model.findCategorys(function (err,documents) {
    if(err){
      res.sendStatus(500)
      console.log("errDB",err);
    }
    let category = documents.map(function (document) {
      return(
        {id:document._id, name: document.name}
      )
    })
    res.json(category)
  })
}
exports.getSpecifications = function (req, res) {
  Model.findSpecifications(req.body.id, function (err,document) {
    if(err){
      res.sendStatus(500)
      console.log("errDB",err);
    }
    res.json(document)
  })
}
