const Model  = require('../model/category')
function validation(category) {
  let errorEntryData  = []
  for (var variable in category) {
    if (category[variable] == '') {
      errorEntryData.push(`${variable}: property is empty`)
    }
  }
  let specifications = category.specifications.map(function (specification,i) {
    if(specification.name != '' || (specification.type=="array" || specification.type=="range")){
      specification.defaultValue = specification.type === 'array' ? [] : {min: 1000000000 , max: 0}
      delete specification.type
      return(specification)
    }else{
      errorEntryData.push(`${specification.name}: wrong data`)
    }
  })
  if (errorEntryData.length !== 0) {
    console.error(Error("errorEntryData"),errorEntryData);
    throw Error("errorEntryData")
  }else {
    category.specifications = specifications
    return category
  }
}
exports.addCategory = function (req,res) {
    let category = validation(req.body)
    Model.addCategory(category,function (err,doc) {
      if(err){
        res.sendStatus(500)
      }else {
          res.json(doc)
      }
    })

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
