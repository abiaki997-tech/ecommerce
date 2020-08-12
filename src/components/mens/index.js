import React,{useContext} from 'react'
import UserContext from '../../context/userContext';
import Hero from './Men-hero'
import Trending from './trending'
import Brand from './brand'


function Mens() {

  const {stateA} = useContext(UserContext)
  console.log(stateA)
  const {isAuth}= stateA
   if(isAuth){
  return (
    <>
     <Hero/>
     <Trending/>
     <Brand/> 
    </>
  )}else{
    return <h1>Please login Account</h1>
  }
}

export default Mens
