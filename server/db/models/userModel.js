const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  
  userName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  tokens:[
    {
      token:{
        type:String,
        // required:true
      }
    }
]

},{timestamps:true})

const myDB= mongoose.connection.useDb('ecommDB')
const User = myDB.model('User',userSchema)

module.exports = User;