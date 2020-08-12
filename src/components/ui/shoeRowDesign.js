import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames'
import './ui.css'

function ShoeRowDesign({ShoeWrapper,handleClick,styleName,styleNamed}) {
  return (
    <div className={classNames("shoe-list",styleName)}>
      {ShoeWrapper.length > 0 ? ShoeWrapper.map(product=>{
        return(
          <div className={classNames("shoe-wrapper",styleNamed)}>
            <div className="shoe1" onClick={()=>handleClick(product.id)}>
              <Link to="/cart">
                  <img src={product.imgSrc} alt="img3" />
                  <button>{product.title}</button>
              </Link>
            </div>
          
    </div>
      )
   
  }):''}

</div>

  )
}

export default ShoeRowDesign
