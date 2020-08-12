function makePostProduct({addProduct}){
  return async function postProduct(httpRequest){
    try {
      
     const body = httpRequest.body;
     
     const posted = await addProduct(body)

     return {
       headers:{
         'Content-Type':'application/json'
       },
       status:201,
       body:posted
     }
    } 
    catch (e) {
      console.log(e)
      return{
        headers:{
          'Content-Type':'application/json'
        },
        status:400,
        body:{
          error:e.message
        }
      }
    }
  }
}

module.exports=makePostProduct