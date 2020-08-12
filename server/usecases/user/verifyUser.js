// core
const {makeLoginUser} = require('../../core')

// (injected) higher function ---- (pass-data) lower function
 function makeVerifyUser ({DB1,makeHttpError,makeHttpSuccess,passwordVerify,generateToken}){
  return async function verifyUser({body}){
   console.log(body)
    // validation with core
    const {email,password} = makeLoginUser(body)
    let userDB=DB1;     
    console.log(email)
    // let user = await findByCredtionals(email,password)
    let user = await userDB.findByOne({email})
    
    if(!user){
      return makeHttpError({
        status:401,
        errorMessage:'email or password entered wrongly'
      })
    }

    const Verify = await passwordVerify(password,user.password)

 
    if(!Verify){
      return makeHttpError({
        status:401,
        errorMessage:'email or password entered wrongly'
      })
    };
    
    let token =await generateToken(email)
    
    let saveToken = await userDB.update(user,token)
    // check it success
    if(saveToken){
      return makeHttpSuccess({
        status:200,
        data:saveToken,
        token
      })
    }
    return saveToken
  }
}
module.exports=makeVerifyUser;