const {addProduct,addUser,verifyUser,payment} = require('../usecases')

const makePostProduct = require('./addToCart/postProduct')
const makePostSignup = require('./user/postSignup')
const makePostLogin = require('./user/postLogin')
const makePostPayment = require('./payment/postPayment')

const postProduct = makePostProduct({addProduct})
const postSignup = makePostSignup({addUser})
const postLogin = makePostLogin({verifyUser})
const postPayment = makePostPayment({payment})

module.exports={postProduct,postSignup,postLogin,postPayment}