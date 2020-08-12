import React,{useContext} from 'react'
import Item from './item'
import Summarypage from './summary'
import UserContext from '../../context/userContext';
function CartItem() {
  
  const {stateA} = useContext(UserContext)
  console.log(stateA)
  const {isAuth}= stateA
   if(isAuth){
  return (
    <>
     <h2 className="section-header">CART</h2>
    
     
        <div className="cart-component">
          <Item/>
          <Summarypage/>
      
      </div> 
     
    
    </>
  )}else{
    return <h1>Please login Account</h1>
  }
}

export default CartItem
