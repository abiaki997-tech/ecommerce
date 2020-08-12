// core
const {makeProduct} = require('../../core')
// (injected) higher function ---- (pass-data) lower function
 function makeAddProduct ({DB,imageBuffer}){
  return async function addProduct(body){

    const {title,price,imageSrc} = makeProduct(body)
         
    let buffer =await imageBuffer(imageSrc)
    
    const product={
      prod_img:buffer.bitmap.data,
      prod_price:price,
      prod_title:title
    }
   
    let result = await DB.insert( product)
    console.log(result)
    return result
  }
}
module.exports=makeAddProduct