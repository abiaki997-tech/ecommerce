
const {DB,DB1} = require('../db/index')
const {passwordHash,passwordVerify,
        imageBuffer,makeHttpError,
        generateToken,verifyToken,makeHttpSuccess} = require('../helpers')
// usecases -injecting -> db/api/helpers
// (injected) higher function ---- (pass-data) lower/outer function
const makeAddProduct = require('./addToCart/addProduct')
const makeAddUser= require('./user/addUser')
const makeVerifyUser = require('./user/verifyUser')
const makePayment = require('./payment')

const {v4} = require('uuid')
const stripe = require('stripe')(process.env.SECRET_KEY);
const {publisher} = require('../event')


const addProduct = makeAddProduct({DB,imageBuffer})
const addUser = makeAddUser({DB1,makeHttpError,makeHttpSuccess,passwordHash,generateToken})
const verifyUser=makeVerifyUser({DB1,makeHttpError,makeHttpSuccess,passwordVerify,generateToken})
const payment  = makePayment({v4,stripe,publisher,DB1,verifyToken,makeHttpError,makeHttpSuccess})

module.exports={addProduct,addUser,verifyUser,payment}