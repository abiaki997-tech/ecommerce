function makePostPayment({payment}){
  return async function postPayment(httpRequest){
    try {
      
     
     const {status,body}= await payment(httpRequest)

     return {
       headers:{
         'Content-Type':'application/json'
       },
       status,
       body
     }
    } 
    catch (e) {
      console.log(e)
      return{
        headers:{
          'Content-Type':'application/json'
        },
        status,
        body
      }
    }
  }
}

module.exports=makePostPayment;