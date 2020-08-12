const bcrypt = require('bcryptjs')

async function passwordVerify(typedPassword,password){
  const passwordVerify = await bcrypt.compare(typedPassword,password)
  return passwordVerify
}

async function passwordHash(password){
  const hashed=await bcrypt.hash(password,8)
  return hashed
}

module.exports={passwordVerify,passwordHash}