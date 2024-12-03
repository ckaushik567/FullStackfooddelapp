import React, { useContext } from 'react';
import foodItemCss from './FoodItem.module.css';
import foodImage from '../../assets/foodImage.png';
import addImg from '../../assets/Plus.png';

function FoodItem({foodName,Description,Price,addToCart={addToCart}, image}) {


  return (
     <div className={foodItemCss.container}>
        <div className={foodItemCss.mainContainer}>
            <div className={foodItemCss.foodContext}>
                <h3>{foodName}</h3>
                <p id={foodItemCss.para}>{Description}</p>
                <h4>₹ {Price}</h4>
            </div>
            <div className={foodItemCss.foodImage}>
                <img src={`http://localhost:3000/images/${image}`} />
                 
            </div>
            <div className={foodItemCss.foodItemAddBtn}>
                <img onClick={()=>addToCart()} src={addImg} alt="" srcset="" />
            </div>
        </div>
     </div>
  )
}

export default FoodItem
