function makePostSignup ({addUser}){
  return async function postSignup(httpRequest){
    try {
      
     const httpBody = httpRequest.body;
     
     const {status,body,token} = await addUser(httpBody)

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

module.exports=makePostSignup;