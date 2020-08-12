

 function makePayment ({v4,stripe,publisher,DB1,verifyToken,makeHttpError,makeHttpSuccess}){
  return async function payment(httpRequest){

    // const {title,price,imageSrc} = makeProduct(body)
    
    const authToken = httpRequest.token;
    console.log('tokenverify ' + authToken);

    const decoding = await verifyToken(authToken)
    // console.log(decoding)

    if(!decoding){
      return makeHttpError({
        status:401,
        errorMessage:'Register/Login Account please!'
      })
    }
   
    const user = await DB1.findByOne({email:decoding})
    // console.log(user)
    if(!user){
      return makeHttpError({
        status:401,
        errorMessage:'unAuthorized !'
      })
    };
  
    const {products,token,totalPrice,quantity}= httpRequest.body;

    const idempotencyKey=v4()

    const customer= await  stripe.customers.create({
      email:token.email,
      source:token.id
    });

    const charge = await stripe.charges.create({
      amount:totalPrice*100,
      currency:token.currency,
      customer:customer.id,
      receipt_email:token.email,
      currency:'usd',
      description:`Purchase shoe's`,
      shipping:{
        name:token.card.name,
        email:token.card.email,
        address:{
          // city:token.card.city,
          country:token.card.address_country,
          // postal_code:token.card.postal_code,
          line1:token.card.address_line1
        }
      }
    },{idempotencyKey});
   
  //  console.log(charge)
   if(charge.status === 'succeeded' && user){
    //  add user details balance
    publisher.one(products,user,charge,totalPrice,quantity)
     return makeHttpSuccess({
      status:200,
      data:'Payment Successfully !!'
    })
   
   }
   else{
    return makeHttpError({
      status:400,
      errorMessage:'Not Payment Successfully'
    })
   }
  }
}
module.exports=makePayment;