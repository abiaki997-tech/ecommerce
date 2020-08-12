import React,{useReducer,useEffect,useContext} from 'react';
import './home.css';


import Hero from './hero'
import Footer from './footer'

import UserContext from '../../context/userContext';


function Home() {
 const {stateA} = useContext(UserContext)
 console.log(stateA)
 const {isAuth}= stateA
  if(isAuth){
    return (

      <div className="body-whole">
    
         <Hero/>
         <Footer/>
      </div>
      );
  }else{
    return <h1>Please login Account</h1>
  }
 
}

export default Home;
