exports.validation = function (product) {
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
