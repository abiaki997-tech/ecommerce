import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {v1} from 'uuid'
import UserContext from '../../context/userContext'
import './cartItems.css'
import Cart_Empty from '../../assets/cart-empty.jpg'

const Item =()=>{
  
  const {state,removeProduct,
         fullProducts,
         handleQuantity,
         handleQuantity1} = useContext(UserContext);
  
 useEffect(() => {
  fullProducts()
  
 }, [state.userCartProducts.length > 0 || state.userBackendProducts.length > 0])
 

  console.log(state)

//-------------------------------SIDE_EFFECTS----------------------------------
// useEffect(()=>{

//   if(state.userBackendProducts.length > 0 && state.userCartProducts.length > 0){

//     console.log('coome on fire one time only secondclickedss')

//     let arrayMixed = state.userBackendProducts.concat(state.userCartProducts);

//     console.log(arrayMixed)

//     fullProducts(arrayMixed)


//    }else
//    if(state.userCartProducts.length > 0){

//     console.log('coome on fire one time only clicked')

//     fullProducts(state.userCartProducts)

//    }else
//    if( state.userBackendProducts.length > 0){

//     console.log('coome on fire one time only secondclicaked')

//     fullProducts(state.userBackendProducts)

//    }
// },[state.userCartProducts.length > 0 || state.userBackendProducts.length > 0])

// ---------------------------------------------------------------------------------

console.log(state.cartProducts)
return(
  <div className="ca">


 {
   state.cartProducts.length > 0 ? 
   <section className="containers content-section">
      <div className="cart-row">
          <p className="cart-header cart-column1">PRODUCT DETAILS</p>
          <p className="cart-price-header  cart-column1">PRICE</p>
          <p className="cart-quantity-header cart-column1">QUANTITY</p>
          <p className="cart-total-header  cart-column1">TOTAL</p>
          <p className="cart-cart-header  cart-column1">CART</p>
      </div>
   

      {state.cartProducts.length >0 ?state.cartProducts.map((productIt)=>{

      return(
  <div className="cart-items" key={v1()}>
     
     <div className="cart-item cart-column2"> 
        <img className="cart-item-image"  src={productIt.imgSrc} alt="img" />
        <p className="cart-item-title">{productIt.title}</p>
        <p className="cart-item-size">Size:8</p>
        <p className="cart-item-color">Color:white</p>
        <button className="btn btn-remove" type="button" 
           onClick={()=>removeProduct(productIt.id)} >REMOVE</button>  
    </div>

    <div>
      <p className="cart-price cart-column2">{productIt.price}$</p>
    </div>
        
     <div className="cart-quantity cart-column2">
        <button className="cart-decrease-quantity" 
            onClick={()=>handleQuantity1(productIt.id)}>-</button>
        <p className="cart-quantity-input" >{productIt.qty}</p>
        <button className="cart-increase-quantity" 
           onClick={()=>handleQuantity(productIt.id)}>+</button>
    </div>

     <div className="last-cart">
      <p className="cart-total-price2">{productIt.totalPrice}$</p>
        <button className="btn btn-buynow" type="button"  >BUY NOW</button>
     </div>
       
  </div>
   )
      }):''}
</section>
  : 
  <img className="cart_empty" src={Cart_Empty} alt="a"/>
 }

</div>

)
}


export default React.memo(Item)
