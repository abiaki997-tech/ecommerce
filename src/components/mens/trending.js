import React,{useState,useContext} from 'react'
import shoe1 from '../../assets/mensImages/4shoe.svg'
import shoe2 from '../../assets/mensImages/4shoe1.svg'
import shoe3 from '../../assets/mensImages/4shoe2.svg'
import shoe4 from '../../assets/mensImages/4shoe3.svg'

import sport from '../../assets/mensImages/sport.svg'
import climbing from '../../assets/mensImages/climbing.svg'
import causal from '../../assets/mensImages/causal.svg'
import formal from '../../assets/mensImages/Formal.svg'
import UserContext from '../../context/userContext';
import ShoeRowDesign from '../ui/shoeRowDesign'
function Trending() {
  const {selectHomeProducts} = useContext(UserContext)
  const [shoeWrapper,setShoeWrapper] = useState([
    {
      id:31,
      imgSrc:shoe1,
      price:20,
      title:'NIKE AIR',
     },
     {
      id:32,
      imgSrc:shoe2,
      price:20,
      title:'NIKE BLAZER',
     },
     {
      id:33,
      imgSrc:shoe3,
      price:20,
      title:'NIKE AIR VAPORMAX',
     },
     {
      id:34,
      imgSrc:shoe4,
      price:20,
      title:'NIKE REACT INFINITY',
     }
  ])

  const handleClick=(id)=>{

    const product = shoeWrapper.find(product => product.id === id)
    console.log(product)
    selectHomeProducts(product)   
   }
  return (
    <div className="men-trending">
      <h2>TRENDING SHOE’S</h2>
      <ShoeRowDesign 
        ShoeWrapper={shoeWrapper}
        handleClick={handleClick}
        styleName="men-trending-shoe-row"
      />
      <div className="men-types-shoe">
        <div className="men-sport">
          
          <button>SPORT</button>
        </div>
         <div className="men-causal">
          <p>CAUSAL</p>
         </div>
        <div className="men-formal">
        <p>FORMAL</p>
        </div>
        <div className="men-climbing">
        <p>CLIMBING</p>
          </div>
        
        
       
      </div>
    </div>
  )
}

export default Trending;
