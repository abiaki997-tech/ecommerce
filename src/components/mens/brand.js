import React,{useContext,useState} from 'react'
import addidas from '../../assets/mensImages/adidas.png'
import nike from '../../assets/mensImages/nike.svg'
import reebok from '../../assets/mensImages/reebok.svg'
import puma from '../../assets/mensImages/puma.svg'
import UserContext from '../../context/userContext';
import shoe1 from '../../assets/mensImages/6shoe-1.svg'
import shoe2 from '../../assets/mensImages/6shoe-2.svg'
import shoe3 from '../../assets/mensImages/6shoe-3.svg'
import shoe4 from '../../assets/mensImages/6shoe-4.svg'
import shoe5 from '../../assets/mensImages/6shoe-5.svg'
import shoe6 from '../../assets/mensImages/6shoe-6.svg'

import ShoeRowDesign from '../ui/shoeRowDesign'
function Brand() {
  const {selectHomeProducts} = useContext(UserContext)
  const [ShoeWrapper, setShoeWrapper] = useState([
    {
      id:41,
      imgSrc:shoe1,
      price:20,
      title:'NIKE AIR',
     },
     {
      id:42,
      imgSrc:shoe2,
      price:20,
      title:'NIKE BLAZER',
     },
     {
      id:43,
      imgSrc:shoe3,
      price:20,
      title:'NIKE AIR VAPORMAX',
     },
     {
      id:44,
      imgSrc:shoe4,
      price:20,
      title:'NIKE REACT INFINITY',
     },
     {
      id:45,
      imgSrc:shoe5,
      price:20,
      title:'NIKE AIR',
     },
     {
      id:46,
      imgSrc:shoe6,
      price:20,
      title:'NIKE AIR',
     },
  ])

  const handleClick=(id)=>{

    const product = ShoeWrapper.find(product => product.id === id)
    console.log(product)
    selectHomeProducts(product)   
   }
  return (
    <>
      <div className="men-brand">
        <img className="addidas" src={addidas} alt="n"/>
        <img className="nike" src={nike} alt="n"/>
        <img className="reebok" src={reebok} alt="n"/>
        <img className="puma" src={puma} alt="n"/>
      </div>

      <div className="btn-shoes">
        <button className="btn-latest">latest</button>
        <button className="btn-seller">best sellers</button>
        <button className="btn-feature">features </button>
      </div>

      <ShoeRowDesign 
        ShoeWrapper={ShoeWrapper}
        handleClick={handleClick}
        styleName="men"
        styleNamed="mens"
       />
    </>
  )
}

export default Brand;
