function makePostLogin ({verifyUser}){
  return async function postLogin(httpRequest){
    try {
      
     const httpbody = httpRequest.body;
     
     const {status,body,token} = await verifyUser(httpbody)

     return {
       headers:{
         'Content-Type':'application/json'
       },
       status,
       body,
       token
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

module.exports=makePostLogin;