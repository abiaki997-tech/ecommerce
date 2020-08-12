let validator = require('validator')

function registerValidator(email,password,username){
 const vaildEmail= validator.isEmail(email)?email:'Email is not Vaild'
 const vaildName= validator.isLength(username,{min:4})?username:'userName minmum length 4'
 const vaildPassword= validator.isLength(password,{min:8})?password:'password minmum length 8'
 return{vaildEmail,vaildName,vaildPassword}
}

module.exports={registerValidator}