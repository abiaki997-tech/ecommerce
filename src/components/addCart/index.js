import React,{useState,useContext} from 'react';
import './cart.css';
import axios from 'axios'
import '../../assets/Images2/o.png'
import oval from '../../assets/Images2/o.png'
import UserContext from '../../context/userContext'


import CartShoeWrapper from '../ui/cartShoeWrapper'
import shoe1 from '../../assets/Images2/shoe0.png'
import shoe2 from '../../assets/Images2/shoe2.png'
import shoe3 from '../../assets/Images2/shoe3.png'
import shoe4 from '../../assets/Images2/shoe4.png'

import {Link} from 'react-router-dom'

 
function Cart() {
  const [shoeWrapper,setShoeWrapper] = useState( [
  {
    imgSrc:shoe1,
    id:10,
    title:`Canvas Sneakers`,
    shoeCode:'AHU6798',
    price:20
  },
  {
    imgSrc:shoe2,
    id:11,
    title:`Canvas Sneakers`,
    shoeCode:'AHU6799',
    price:20
  },
  {
    imgSrc:shoe3,
    id:12,
    title:`Canvas Sneakers`,
    shoeCode:'AHU6790',
    price:25
  },
  {
    imgSrc:shoe4,
    id:13,
    title:`Canvas Sneakers`,
    shoeCode:'AHU6791',
    price:30
  }
]);
  const {state,selectCartProducts,stateA} = useContext(UserContext)
  const [userInput,setUserInput ] = useState([])
  const [value,setValue]=useState([])
  
  const {isAuth}= stateA



 const userHomeProduct= state.userHomeProducts


  const handleClick=(id)=>{
     const searchProduct = shoeWrapper.find(product=>product.id === id);
     setValue([searchProduct])  
  };


 const thirdTopArray=value.length>0 ?userInput.concat(value):userInput.concat(userHomeProduct)


  const addCartButton=(id)=>{

      const product = thirdTopArray.find(product => product.id === id)
      console.log(product)
      // axios.post('http://localhost:5000/user/productList/addToCart',{
      //   tit,price,img
      // })
      //   .then(res =>console.log(res))
      //   .catch(err => console.log(err))
      product.qty=1;
      product.totalPrice=parseInt(product.price)*product.qty

   
     selectCartProducts(product)
  }

  
  if(isAuth){
  return (
  
<>

  <div className="cart">
{userInput.length>0 || thirdTopArray.length > 0 ? 
   thirdTopArray.map(product =>{
  return(
    <div className="cart-wrapper">
    <div className="main-shoe">
         <img src={product.imgSrc} alt=""/>
    </div>
    <div className="details-shoe">
<h1 className="title">{product.title}</h1>
      <h3 className="second-title">Men's Canvas Sneakers</h3>
      <p id="price">{product.price}$</p>

      <div className="star-rating">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>
      <p className="clr">Colour:Blue <span>
        <img className="clr-blue" src={oval} alt="blue"/></span></p>

    <p className="size">Size 
      <span className="list-size">
        <select className="option-list">
          <option className="option-1">10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </span>
    </p>
    <Link to="/items">
    <button id="btns-primary" onClick={()=>addCartButton(product.id)} >Add to Cart</button>
   </Link>
  
    </div>
  </div>
  )
    

}): ''}

 </div>

  <CartShoeWrapper 
       handleClick={handleClick}
       cartShoeWrapper={shoeWrapper}
      />
 </>
  )}else{
    return <h1>Please login Account</h1>
  };
}

export default React.memo(Cart);
