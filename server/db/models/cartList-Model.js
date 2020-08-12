const mongoose = require('mongoose')
// const connectDB = require('./config')

const productListSchema = new mongoose.Schema({
  
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
  },
  prod_owner:{
    type:mongoose.Schema.Types.ObjectId,
    // required:true
    // ref:'User'
  },
},{timestamps:true})

const myDB= mongoose.connection.useDb('ecommDB')
const AddtoCart_ProductList = myDB.model('AddToCart_Products',productListSchema)

module.exports = {AddtoCart_ProductList};