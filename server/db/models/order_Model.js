const mongoose = require('mongoose')
// const connectDB = require('./config')

const buyedProductsSchema = new mongoose.Schema({
  
  buyed_products:[{
    prod_name:{
      type:String,
      required:true
    },
    prod_img:{
      type:Buffer,
      // required:true
    },
    prod_price:{
      type:String,
      required:true
    },
    prod_quantity:{
      type:String,
      // required:true
    }
  }],
  prod_totalPrices:{
     type:Int16Array
  },
  prod_totalQty:{
    type:Int16Array
  },
  // prod_shippingAddress:{

  // },
  prod_owner:{
    type:mongoose.Schema.Types.ObjectId,
    // required:true
    // ref:'User'
  },
},{timestamps:true})

const myDB= mongoose.connection.useDb('ecommDB')
const Buyed_Products= myDB.model('BUYED_PRODUCTS',buyedProductsSchema)

module.exports = Buyed_Products;