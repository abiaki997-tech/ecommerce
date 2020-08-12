require('dotenv').config()
const mongoose = require('mongoose')


const uri =process.env.URL
// console.log(uri)
async function makeDB(){
  try{
    await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,     
            useCreateIndex:true,
            useFindAndModify:false
    }); 
    
    console.log('Connected-DB')
  }
  catch(error){
    console.log(error.message);
    process.exit(1);
  }
}

// injecting
// productDB returning objects
// DB will access it
// const DB=productDB({makeDB,AddtoCart_ProductList})
// module.exports=makeDB
module.exports={makeDB}
