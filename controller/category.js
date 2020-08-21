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
