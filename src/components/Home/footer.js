import React from 'react';



import product from '../../assets/images/Product1.png'
import product1 from '../../assets/images/Product1 (1).png'

function Footer() {
  return (
 

  <div className="pics">

    <h2 className="title-last">YOUR DAILY SOURCE FOR SPORT</h2>
    <div className="pics-wrapper">
      <img className="pic1" src={product} alt="img7"/>
      <img className="pic2" src={product1} alt="img8"/>
    </div>

  </div>


   
  );
}

export default Footer;
