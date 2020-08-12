const Id = require('../../helpers/Id')
// const {AddtoCart_ProductList} = require('./productList-Model')

function productDB({AddtoCart_ProductList}){
  // list of objects/functions accessed.
  return Object.freeze({
     insert,
     findAll,
     findByOne,
     remove,
     update
  })
  // ADD
  async function insert({_id:_id=Id.makeID,...data}){
    
     
      
      const {prod_title,prod_price,prod_img} = data

      console.log(_id,prod_img)
      
      const addTocart_Data = new AddtoCart_ProductList({ 
        prod_name:prod_title,
        prod_price,
        prod_img   
      });

      const result = await addTocart_Data.save();
      
      return result;  
   }
  //  READ
  async function findAll(){
    return 
   }
  async function findByOne(){
    return 
   }

  //DELETE
  async function remove(){
    return 
   }

  //  UPDATE
  async function update(){
    return 
   }
  //  scoping issue/
  // const insert = ()=>{
  //   return
  // }
  
}

module.exports={productDB}