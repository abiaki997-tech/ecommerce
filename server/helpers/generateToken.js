const jwt = require('jsonwebtoken')

function generateToken(email){
  console.log(email)
  const token = jwt.sign(email,"mypassword")
  return token
}
function verifyToken(token){
  const decoded = jwt.verify(token,"mypassword")
  return decoded
}
module.exports={generateToken,verifyToken};

