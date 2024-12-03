import React, { useContext } from 'react';
import productHeaderCss from './ProductHeader.module.css';
import orderComp from '../../assets/orderComp.png';
import motocross from '../../assets/Motocross.png';
import prodFood from '../../assets/prodFood.png';
import ratingImg from '../../assets/ratingImg.png';
import clock from '../../assets/Clock.png';
import searchIcon from '../../assets/searchIcon.png';
// import prodImg1 from '../../assets/prodImg1.png';
// import prodImg2 from '../../assets/prodImg2.png';
// import prodImg3 from '../../assets/prodImg3.png';
import addImg from '../../assets/Plus.png';
import { StoreContext } from '../Context/StoreContext';

function ProductHeader() {

    const {handleOnRest,restText} = useContext(StoreContext);
    return (
        <>
            <div className={productHeaderCss.container}>
                <div className={productHeaderCss.mainContainer}>
                    <div className={productHeaderCss.restourantText}>
                        <p>I'm lovin' it!</p>
                        <h1>{restText}</h1>
                        <div className={productHeaderCss.btnSection}>
                            <button> <img src={orderComp} />Minimum Order: 12 GBP</button>
                            <button> <img src={motocross} />Delivery in 20-25 Minutes</button>
                        </div>
                    </div>
                    <div className={productHeaderCss.foodImage}>
                        <img src={prodFood} />
                        <div className={productHeaderCss.ratingImg}>
                            <img src={ratingImg} />
                        </div>
                    </div>
                </div>
                <div className={productHeaderCss.timgSec}>
                    <p> <img src={clock} />Open until 3:00 AM</p>
                </div>
            </div>
            <div className={productHeaderCss.searchContainer}>
                <div className={productHeaderCss.restHeading}>
                    <h1>All Offers from {restText}</h1>
                </div>
                <div className={productHeaderCss.searchBox}>
                    <img src={searchIcon} />
                    <input type="text" placeholder='Search from menu...' />
                </div>
            </div>
            <div className={productHeaderCss.foodNavbar}>
                <div className={productHeaderCss.navbarSection}>
                    <p id={productHeaderCss.offer}>Offers</p>
                    <p>Burgers</p>
                    <p>Fries</p>
                    <p>Snacks</p>
                    <p>Salads</p>
                    <p>Cold drinks</p>
                    <p>Happy Meal®</p>
                    <p>Desserts</p>
                    <p>Hot drinks</p>
                    <p>Sauces</p>
                    <p>Orbit®</p>
                </div>
            </div>
            <div className={productHeaderCss.foodDiscountConatiner}>
                <div className={productHeaderCss.foodDisImg1}>
                    <p id={productHeaderCss.discount}>-20%</p>
                    <div className={productHeaderCss.foodImgTextConatiner}>
                        <div className={productHeaderCss.foodImgText}>
                            <p>foodDiscountConatiner</p>
                            <h4>First Order Discount</h4>
                        </div>
                        <div className={productHeaderCss.addBtn}>
                            <img src={addImg}/>
                        </div>
                    </div>
                </div>
                <div className={productHeaderCss.foodDisImg2}>
                <p id={productHeaderCss.discount}>-20%</p>
                <div className={productHeaderCss.foodImgTextConatiner}>
                        <div className={productHeaderCss.foodImgText}>
                            <p>foodDiscountConatiner</p>
                            <h4>First Order Discount</h4>
                        </div>
                        <div className={productHeaderCss.addBtn}>
                            <img src={addImg}/>
                        </div>
                    </div>
                </div>
                <div className={productHeaderCss.foodDisImg3}>
                <p id={productHeaderCss.discount}>-20%</p>
                <div className={productHeaderCss.foodImgTextConatiner}>
                        <div className={productHeaderCss.foodImgText}>
                            <p>foodDiscountConatiner</p>
                            <h4>First Order Discount</h4>
                        </div>
                        <div className={productHeaderCss.addBtn}>
                            <img src={addImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductHeader
