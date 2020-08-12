
import React from 'react';
// import MenShoe from '../../assets/images/men_with_Shoe.png'
import MenShoe from '../../assets/Best-Mens.jpg'
import './mens.css'
function  Hero() {
  return (
<div className="men-hero">
 <div className="men-hero-wrap" >
       <div className="men-hero-heading">
          <p>Summer Season offer</p>
          <h2>FLAT UP TO 50% OFFER FOR MEN’S</h2>
          <button>SHOP NOW</button>
      </div>
      <div className="men-hero-img">
        <img className="img" src={MenShoe}/>
      </div>

    </div>
    </div>  
  )
}

export default Hero
