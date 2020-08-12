function buildMakeUser(){
  return function makeUser(body){
   console.log(body)
   return body
  }
}

module.exports=buildMakeUser