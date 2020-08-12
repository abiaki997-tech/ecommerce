const buildMakeProduct = require('./addToCart/makeProduct')
const buildMakeUser = require('./user/makeUser')
const buildMakeLogin = require('./user/makeLoginUser')
// outer function inject / inner function pass data
const makeProduct = buildMakeProduct()
const makeUser=buildMakeUser()
const makeLoginUser = buildMakeLogin()
module.exports={makeProduct,makeUser,makeLoginUser}