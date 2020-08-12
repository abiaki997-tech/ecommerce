const Id = require('../../helpers/Id')



function userDB(User){

  // list of objects/functions accessed.
  return Object.freeze({
     insert,
     findAll,
     findByOne,
     remove,
     update,
     findById
  })
  // ADD
  async function insert({_id:_id=Id.makeID,...data}){
    

     const {userName,email,password,tokens} = data
  
     const user = new User({ 
                      userName,
                      email,
                      password,
                      tokens 
      });
  
     const result = await user.save();
      
     return result;  
   }
  //  READ
  async function findAll(){
    return 
   }
   async function findById(id){
    const user = await User.findOne({_id:id})
    return user
   }
  async function findByOne({email}){
    console.log({email})
     const user = await User.findOne({email})
    //  console.log(user)
     return user
   }

  //DELETE
  async function remove(){
    return 
   }

  //  UPDATE
  async function update(user,token){
    console.log(`ssd ${user}`)
    user.tokens = user.tokens.concat({ token })
  
    return await user.save()
   
   }
  //  scoping issue/
  // const insert = ()=>{
  //   return
  // }
  
}

module.exports=userDB