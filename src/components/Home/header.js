import React from 'react';


import Nike from '../../assets/images/Nike.png'
import Rectangle from '../../assets/images/Rectangle.svg'
import carticon from '../../assets/cart.png'
import { Link,withRouter} from 'react-router-dom';
// import shoe from './images/shoe.svg'


function Header() {
  return (
 
     
     <header  >
       
     <div className="top">
        <img id="nike-icon" src={Nike} alt="img"/>
        <h1 id="title">JUST DO IT</h1>
        <p id="name">ABHILASH B L</p>
        <img id="name-logo" src={Rectangle} alt="img1"/>
        <Link to="/items" >
         <img id="cart-icon" src={carticon} />
        </Link>
     </div>
     <div className="down">
        <Link to="/home">
         <button className="btn-home" >Home</button>
        </Link>
        <button className="btn-relase" >New Releases</button>
        <Link to="/men">
        <button className="btn-men" >Men</button>
        </Link>
        <button className="btn-women" >Women</button>
        <button className="btn-kids" >Kids</button>
        <button className="btn-custom" >Customize</button>
        <button className="btn-sale" >Sale</button>
        <button className="btn-search" >Search</button>
     </div>
  </header>


  );
}

export default withRouter(Header);
