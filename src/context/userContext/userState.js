import React,{useState,useReducer} from 'react'
// import {useDispatch} from 'react-redux'
import UserContext from './index'
import UserReducer from './userReducer'
import img from '../../assets/images/shoe1.png'
import {CART_PRODUCTS,
        HOME_PRODUCTS,
        PURCHASE_SUCCESSFULLY,
        NOT_SUCCESSFULLY_PURCHASE,
        GET_PRODUCTS,REMOVE_PRODUCT,
        INC,DEC,SHOPPING_PRODUCTS,
        GET_PRODUCTS_ERROR} from './userReducer'
import axios from 'axios'
import { authReducer } from '../../components/auth/authReducer'
export const UserState=(props)=>{
// const dispatch = useDispatch()
 const initalState={
   isAuth:null,
   userCartProducts:[],
   userHomeProducts:[],
   error:null,
   qaty:0,
   cartProducts:[],
   success:false,
   totalPrice:0,
   userBackendProducts:[
     {
      id:1,
      qty:1,
      imgSrc:img,
      title:'Puma',
      price:20,
      totalPrice:20
    },
    {
      id:2,
      qty:1,
      imgSrc:img,
      title:'Pumaa',
      price:200,
      totalPrice:200
    }
  ]
 }
 const stateAuth={
  userName:'',
  email:'',
  password:'',
  error:null,
  loading:false,
  isAuth:null,
  user:null,
  logout:null
}
 const [state, dispatch] = useReducer(UserReducer, initalState)
 const [stateA,disp]=useReducer(authReducer,stateAuth)

 const selectCartProducts=(payload)=>{
   console.log(`triggerd funD paying`)
   dispatch({
      type:CART_PRODUCTS,
      payload:payload
   })
 }
 const fullProducts=()=>{
  console.log(`triggerd fullProducts `)
 
  dispatch({
     type:SHOPPING_PRODUCTS,
     payload:"hi"
  })
}
 const selectHomeProducts=(payload)=>{
  console.log(`triggerd funE payed`)
  dispatch({
     type:HOME_PRODUCTS,
     payload:payload
  })
}

const handleQuantity =(payload)=>{
  console.log(payload)
  dispatch({
    type:INC,
    id:payload
  })
}
const handleQuantity1 =(payload)=>{
  dispatch({
    type:DEC,
    id:payload
  })
}


const getProducts = async()=>{
  // try {
    // const res=await axios.get("http://localhost:5000/user/get/productList/")
    dispatch({
      type:GET_PRODUCTS
      // payload:payload
    })
}
const removeProduct = async(payload)=>{
    dispatch({
      type:REMOVE_PRODUCT,
      id:payload
    })
}
const handleToken=(token)=>{
  console.log(token)

  let options={
  products:state.cartProducts,
  token,
  totalPrice:state.totalPrice,
  quantity:state.qaty
  }
  axios.post('http://localhost:5000/user/payment',options,
  {withCredentials:true})
  .then((result)=>{
    console.log(result)
    dispatch({
      type:PURCHASE_SUCCESSFULLY,
      payload:result
    })
  })
  .catch((error)=>{
    console.log(error)
    dispatch({
      type:NOT_SUCCESSFULLY_PURCHASE,
      payload:error
    })
  })
} 
  return(
<UserContext.Provider value={{state,handleToken,removeProduct,
      handleQuantity,fullProducts,handleQuantity1,
       selectCartProducts,selectHomeProducts,getProducts,disp,stateA}}>
    {props.children}
</UserContext.Provider>
  )
};
