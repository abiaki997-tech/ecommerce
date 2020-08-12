import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom'

import shoe from '../../assets/images/shoe.svg'
import bghero from  '../../assets/images/bg-hero.svg'
import shoe1 from '../../assets/images/shoe1.png'
import shoe2 from '../../assets/images/shoe2.png'
import shoe3 from '../../assets/images/shoe3.png'
import shoe4 from '../../assets/images/shoe4.png'
import ShoeRowDesign from '../ui/shoeRowDesign'
import shoe5 from '../../assets/images/shoe5.png'
import UserContext from '../../context/userContext';
// import useShoeWrapper from '../hook/useShoeWrapper'

function Hero() {
  //  const [shoeWrapper,setShoeWrapper] = useShoeWrapper(handleClick)

const {selectHomeProducts} = useContext(UserContext)
const [heroShoeWrapper, ssetHeroShoeWrapper] = useState([
  {
    id:20,
    imgSrc:shoe1,
    price:20,
    title:'NIKE AIR',
   },
   {
    id:21,
    imgSrc:shoe2,
    price:20,
    title:'NIKE BLAZER',
   },
   {
    id:22,
    imgSrc:shoe3,
    price:20,
    title:'NIKE AIR VAPORMAX',
   },
   {
    id:23,
    imgSrc:shoe4,
    price:20,
    title:'NIKE REACT INFINITY',
   },
   {
    id:24,
    imgSrc:shoe5,
    price:20,
    title:'NIKE AIR FORCE',
   }
  ])
  // useShoeWrapper(handleClick,heroShoeWrapper)
 const handleClick=(id)=>{

  const product = heroShoeWrapper.find(product => product.id === id)
  console.log(product)
  selectHomeProducts(product)   
 }
  return (
  <>
     
    

  <div className="hero">
   

    <h2 id="hero-title">Discover</h2>

    <div className="hero-wrapper">

      <div className="hero-left">
         <p id="hero-left-title">THE NEW PEGASUS 37</p>
         <img id="hero-shoe" src={shoe} alt="img2"/>
      </div>

      <div className="hero-right">
        <img id="hero-bg" src={bghero} alt="img3"/>
        <p id="hero-right-title">THE BEAST OF JORDAN</p>
        <p id="hero-right-para">Featuring the stories and 
          sneakers that made the Jumpman a global phenomenon.</p>
        <button id="btn-shop">Shop</button>
        <button id="btn-explore">Explore</button>
      </div>
    </div>
  </div>
  <h2 id="title-foot">FEATURED FOOTWEAR</h2>
  <ShoeRowDesign 
    ShoeWrapper={heroShoeWrapper}
    handleClick={handleClick}
   />
    </>
  );
}

export default Hero;
