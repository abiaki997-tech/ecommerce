import React from 'react'
import './ui.css'
function CartShoeWrapper({cartShoeWrapper,handleClick}) {
  return (
    <>
     <p className="shoe-para">Customers Who Bought This Item Also Bought</p>
    <div className="shoe-prices">
    {cartShoeWrapper.length > 0 ?  cartShoeWrapper.map(product=>{

      return(
        <div className="shoe-wrappers">

<div onClick={()=>handleClick(product.id)}>
  <img src={product.imgSrc} alt="a"/>
    <p className="shoe-p">{product.title}</p>
    <p className="shoe-code">{product.shoeCode}</p>

  <div className="shoe-ratings">
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star"></span>
    <span className="fa fa-star"></span>
  </div>

    <p className="price-shoe" >{product.price}$</p>
</div>

</div>
      )
 
    }) 
 : ''}


</div>
    </>
   
  )
}

export default CartShoeWrapper
