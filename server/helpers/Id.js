const cuid = require('cuid')


const ID = Object.freeze({
  makeID:cuid()
})

module.exports=ID;