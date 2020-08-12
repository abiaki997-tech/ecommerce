const events = require('events');
const eventsEmitter = new events.EventEmitter();

const {setOrderDetails}= require('./usecases/ordered_Details')

const publisher={
  one:(products,user,charge,totalPrice,quantity)=>{

    console.log('fire')
    // console.log(products,user,charge,totalPrice,quantity)

    eventsEmitter.emit('STRIPE_RESULT',{products,user,charge,totalPrice,quantity})
 
  }
}

eventsEmitter.on('STRIPE_RESULT',({products,user,charge,totalPrice,quantity})=>{
  setOrderDetails({products,user,charge,totalPrice,quantity})
  return 'success'
})

module.exports={publisher}