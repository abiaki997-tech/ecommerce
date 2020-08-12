// core
const {makeUser} = require('../../core')


// (injected) higher function ---- (pass-data) lower function
 function makeAddUser ({DB1,makeHttpError,makeHttpSuccess,passwordHash,generateToken}){
  return async function addUser(body){

    // validation with core
    let userDB=DB1;
    const {userName,email,password} = makeUser(body)
     
    let user = await userDB.findByOne({email})
    
    if(user){
      return makeHttpError({
        status:401,
        errorMessage:'User already exists'
      })
    }
     
    let token =await generateToken(email)

    let hash = await passwordHash(password)
    
    let seralizeObject={
       userName,
       email,
       password:hash,
       tokens:[{token}]
    }
   
    let result = await userDB.insert(seralizeObject)
    console.log(result)
    // some checking
    if(result){
      return makeHttpSuccess({
        status:201,
        data:result,
        token
      })
    }
    return result
  }
}
module.exports=makeAddUser;