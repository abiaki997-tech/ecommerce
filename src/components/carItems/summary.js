import dotenv from 'dotenv'
import React,{useContext} from 'react'
import userContext from '../../context/userContext'
import StripeCheckout from 'react-stripe-checkout'
import icon from '../../assets/amazon-icon.jpg'
import axios from 'axios'
dotenv.config()

function Summarypage() {
  const {state,handleToken} = useContext(userContext)
console.log(state)
  
  return (
  
 <>
  {state.cartProducts.length>0 ?
  <div className="order-summary-wrapper">
  <h3 className="order-summary-header">ORDER SUMMARY</h3>

   <div className="order-summary-item-wrapper">
<p className="order-summary-item">ITEMS<span className="order-summary-item-qty">{state.qaty}</span></p>
<p className="order-summary-price">{state.totalPrice}$</p>
   </div>

   <div className="order-summary-code-Wrapper">
     <input className="order-summary-code"  placeholder="Enter Gift code"/>
     <button>Apply</button>
   </div>

  <div className="order-summary-totalcost-wrapper">
    <p className="order-summary-totalcost-header">TOTAL COST</p>
<p className="order-summary-totalcost-header-price" >{state.totalPrice}$</p>
  </div>

<div >
<StripeCheckout
  name="Buy Products"
  image={icon}
  description="Shoe's Purchase"
  panelLabel="Buy Now"
  // ComponentClass="div"
  stripeKey={process.env.REACT_PUBLIC_KEY}
  token={handleToken}
  amount={state.totalPrice*100}
  currency="USD"
  shippingAddress
  billingAddress
>


<button className="order-summary-checkout-btn">CHECKOUT</button>
</StripeCheckout>
 
  
</div>
 
</div>

  :''}
</>
          
  
  )  
}

export default Summarypage;
