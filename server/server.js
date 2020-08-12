const express = require('express')
const morgan = require('morgan')
const cors=require('cors')
const CookieParser = require('cookie-parser')
const {makeDB} = require('./db/connectDB')
const makePureObject= require('./helpers/express-callback')
const {postProduct,postSignup,postLogin,postPayment} = require('./controllers')



const app =express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 
}))
app.use(CookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
makeDB()

app.use(morgan(':method :url :status :response-time ms'))

app.post('/user/productList/addToCart',makePureObject(postProduct))
app.post('/user/register',makePureObject(postSignup))
app.post('/user/login',makePureObject(postLogin))

app.post('/user/payment',makePureObject(postPayment))
// app.post('/user/payment',async(req,res)=>{

//   const {products,token,totalPrice,quantity}= req.body;
//   const idempotencyKey=v4()
//   const customer= await  stripe.customers.create({
//     email:token.email,
//     source:token.id
//   });
//  const charge = await stripe.charges.create({
//   amount:totalPrice*100,
//   currency:token.currency,
//   customer:customer.id,
//   receipt_email:token.email,
//   currency:'usd',
//   description:`Purchase shoe's`,
//   shipping:{
//     name:token.card.name,
//     email:token.card.email,
//     address:{
//       // city:token.card.city,
//       country:token.card.address_country,
//       // postal_code:token.card.postal_code,
//       line1:token.card.address_line1
//     }
//   }
// },{idempotencyKey});
 
// //  console.log(charge)
//  if(charge.status === 'succeeded'){
//    publisher.one(products,charge,totalPrice,quantity)
//    return res.status(200).send({data:'Payment Successfully !!'})
//  }
//  else{
//    return res.send(400).send({error:'Not Payment Successfully'})
//  }

// });


app.listen(5000,()=>{
  console.log(`Server is Listening on port 5000`)
})
