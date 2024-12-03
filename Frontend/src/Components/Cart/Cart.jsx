import React, { useContext } from 'react';
import cartCss from './Cart.module.css';
import basket from '../../assets/Basket.png';
import removeIcon from '../../assets/Remove.png';
import arrowBtn from '../../assets/freebtn.png';
import arrowBtn1 from '../../assets/freebtn1.png';
import scooterIcon from '../../assets/scooter.png';
import storeIcon from '../../assets/store.png';
import checkoutImg from '../../assets/checkout.png'
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import shareImg from '../../assets/share.png';

function Cart({ foodDatas, getTotalAmount }) {
    const navigate = useNavigate();

    function handleOnNavigate() {
        navigate('/checkoutpage')
    }

    const { removeFromCart, cartItem } = useContext(StoreContext);
    return (
        <div className={cartCss.container}>
            <div className={cartCss.shareLink}>
                <img src={shareImg}/>
                <p>Share this cart with your friends</p>
                <button>Copy Link</button>
            </div>
            <div className={cartCss.cartNav}>
                <h2><img src={basket} />My Basket</h2>
            </div>
            {foodDatas.map((item) => {
                if (cartItem[item.id] > 0) {
                    return <>
                        <div className={cartCss.cartItemsSection}>
                            <p id={cartCss.quantity}>{cartItem[item.id]}x</p>
                            <div className={cartCss.itemDitails}>
                                <p id={cartCss.price}>₹ {cartItem[item.id] * item.Price}</p>
                                <h4>{item.FoodName}</h4>
                                <p id={cartCss.ditail}>{item.Description}</p>
                            </div>

                            <img onClick={() => removeFromCart(item.id)} src={removeIcon} />
                        </div>
                        <hr />
                    </>
                }
            })}
            <div className={cartCss.amountContainer}>
                <div className={cartCss.amontText}>
                    <h3>Sub Total:</h3>
                    <h3>Discounts:</h3>
                    <h3>Delivery Fee:</h3>
                </div>
                <div className={cartCss.amount}>
                    <p>₹{getTotalAmount()}</p>
                    <p>-₹3.00</p>
                    <p>₹3.00</p>
                </div>
            </div>
            <hr />
            <div className={cartCss.totalPayContainer}>
                <div className={cartCss.commonContainer}>
                    <div className={cartCss.totalpay}>
                        <h3>Total to pay</h3>
                        <p>₹{getTotalAmount()}</p>
                    </div>
                </div>
                <div className={cartCss.commonContainer}>
                    <div className={cartCss.freeIte}>
                        <p>Choose your free item..</p>
                        <img src={arrowBtn} />
                    </div>
                </div>
                <div className={cartCss.commonContainer}>
                    <div className={cartCss.freeIte}>
                        <p>Apply Coupon Code here</p>
                        <img src={arrowBtn1} />
                    </div>
                </div>
            </div>
            <hr />
            <div className={cartCss.deliveryTime}>
                <div className={cartCss.deliveryStateTime}>
                    <img src={scooterIcon} />
                    <h4>Delivery</h4>
                    <p>Starts at 17:50</p>
                </div>
                <div className={cartCss.deliveryCollecTime}>
                    <img src={storeIcon} />
                    <h4>Collection</h4>
                    <p>Starts at 16:50</p>
                </div>
            </div>
            <div className={cartCss.commonContainer}>
                <div className={cartCss.chekoutContainer}>
                    <img src={checkoutImg} />
                    <p onClick={handleOnNavigate}>Checkout!</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
