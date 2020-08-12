function buildMakeLogin(){
  return function makeLoginUser(body){
   console.log(body)
   return body
  }
}

module.exports=buildMakeLogin;