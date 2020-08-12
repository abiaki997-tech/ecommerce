// dependecy
const {AddtoCart_ProductList} = require('./models/cartList-Model')
const userModel = require('./models/userModel')

// ---
const {productDB} = require('./collections/cartList-db')
const userDB = require('./collections/user-DB')

// injecting
// productDB returning objects
// DB will access it

const DB=productDB({AddtoCart_ProductList})
const DB1=userDB(userModel)

module.exports={DB,DB1}

