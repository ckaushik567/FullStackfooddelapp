import React, { useContext } from 'react';
import checkoutCss from './Checkout.module.css';
import cartFoodImg from '../../assets/cartFood.png';
import mapPinImg from '../../assets/mapPin.png';
import rightArrow from '../../assets/right.png';
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {

    const { foodDatas, setFoodDatas, cartItem, getTotalAmount } = useContext(StoreContext);
    const totalItem = Object.keys(cartItem).length;

    const navigate = useNavigate();

    function handleOnNavigate() {
        navigate('/payment')
    }
    function handleOnNavi() {
        navigate('/address')
    }

    return (
        <div className={checkoutCss.container}>
            <div className={checkoutCss.orderDitailsContaine}>
                <h1><img src="" />Your Order Details</h1>
                <div className={checkoutCss.upperConatiner}>
                    <div className={checkoutCss.mainContainer}>
                        {foodDatas.map((item) => {
                            if (cartItem[item.id] > 0) {
                                return <>
                                    <div className={checkoutCss.orderDitails}>
                                        <div className={checkoutCss.orderImage}>
                                            <img src={`https://fullstackfooddelapp-9.onrender.com/images/${item.image}`} />
                                            <div className={checkoutCss.orderText}>
                                                <h3>{item.FoodName}</h3>
                                                <p>{cartItem[item.id]}x item</p>
                                            </div>
                                        </div>
                                        <div className={checkoutCss.price}>
                                            <p>₹{cartItem[item.id] * item.Price}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            }
                        })}
                        {/* <div className={checkoutCss.orderDitails}>
                        <div className={checkoutCss.orderImage}>
                            <img src={cartFoodImg} />
                            <div className={checkoutCss.orderText}>
                                <h3>Royal Cheese Burger</h3>
                                <p>1x item</p>
                            </div>
                        </div>
                        <div className={checkoutCss.price}>
                            <p>₹120</p>
                        </div>
                    </div>
                    <hr /> */}
                        {/* <div className={checkoutCss.orderDitails}>
                        <div className={checkoutCss.orderImage}>
                            <img src={cartFoodImg} />
                            <div className={checkoutCss.orderText}>
                                <h3>Royal Cheese Burger</h3>
                                <p>1x item</p>
                            </div>
                        </div>
                        <div className={checkoutCss.price}>
                            <p>₹120</p>
                        </div>
                    </div>
                    <hr /> */}
                        <div className={checkoutCss.notes}>
                            <p>Notes</p>
                            <input type="text" placeholder='Add order notes' />
                        </div>
                    </div>
                    <div className={checkoutCss.addressContainer}>
                        <div onClick={handleOnNavi} className={checkoutCss.addressDitails}>
                            <div className={checkoutCss.mapImage}>
                                <img src={mapPinImg} />
                                <div className={checkoutCss.addRessText}>
                                    <h3>Delivery Address</h3>
                                    <p>45, Green Street, Sector 12...</p>
                                </div>
                            </div>
                            <div className={checkoutCss.price}>
                                <img src={rightArrow} />
                            </div>
                        </div>
                        <hr />
                        <div className={checkoutCss.itemsCountContainer}>
                            <div className={checkoutCss.items}>
                                <p>Items</p>
                                <p>Sales Tax</p>
                            </div>
                            <div className={checkoutCss.subprice}>
                                <p>₹{getTotalAmount()}</p>
                                <p>₹10</p>
                            </div>
                        </div>
                        <hr />
                        <div className={checkoutCss.subTota}>
                            <p>Subtotal ({totalItem} items)</p>
                            <h3>₹{getTotalAmount() + 10}</h3>
                        </div>
                        <div className={checkoutCss.choosePaymentBtn}>
                            <button onClick={handleOnNavigate}>Choose Payment Method</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
