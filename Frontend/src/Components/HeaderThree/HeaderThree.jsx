import React from 'react';
import headerThreeCss from './HeaderThree.module.css';
import friendsImg from '../../assets/friendImg.png';
import logo from '../../assets/LOGO 1.png';
import playStoreImg from '../../assets/playStorelogo.png';
import rideImg from '../../assets/rideImg.png';
import partnerImg from '../../assets/partnerImg.png'
import orderFood from '../../assets/orderFood.png';
import order from '../../assets/order.png';
import food from '../../assets/food.png'
function HeaderThree() {
    return (
        <>
            <div className={headerThreeCss.container}>
                <div className={headerThreeCss.imgSection}>
                    <img src={friendsImg} />
                </div>
                <div className={headerThreeCss.textSection}>
                    <h1><img src={logo} />ing is more </h1>
                    <h2><span>Personalised</span> & Instant</h2>
                    <p>Download the Order.uk app for faster ordering</p>
                    <img id={headerThreeCss.playImg} src={playStoreImg} />
                </div>
            </div>
            <div className={headerThreeCss.imgSec}>
                <div className={headerThreeCss.firstImg}>
                <div className={headerThreeCss.upprText}>
                        <p>Earn more with lower fees</p>
                    </div>
                    <div className={headerThreeCss.imgText}>
                        <p>Signup as a business</p>
                        <h4>Partner with us</h4>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className={headerThreeCss.SecondImg}>
                    <div className={headerThreeCss.upprText}>
                        <p>Earn more with lower fees</p>
                    </div>
                    <div className={headerThreeCss.imgText}>
                        <p>Signup as a rider</p>
                        <h4>Ride with us</h4>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className={headerThreeCss.questionContainer}>
                <div className={headerThreeCss.questionNavbar}>
                    <div className={headerThreeCss.navbarHead}>
                        <h1>Know more about us!</h1>
                    </div>
                    <div className={headerThreeCss.navSect}>
                        <ul>
                            <li id={headerThreeCss.borderStyle}>Frequent Questions</li>
                            <li>Who we are?</li>
                            <li>Partner Program</li>
                            <li>Help & Support</li>
                        </ul>
                    </div>
                </div>
                <div className={headerThreeCss.cartSectio}>
                    <div className={headerThreeCss.questions}>
                        <h4 id={headerThreeCss.borderStyleh4}>How does Order.UK work?</h4>
                        <h4>What payment methods are accepted?</h4>
                        <h4>Can I track my order in real-time?</h4>
                        <h4>Are there any special discounts or promotions available?</h4>
                        <h4>Is Order.UK available in my area?</h4>
                    </div>
                    <div className={headerThreeCss.cardsSec}>
                        <div className={headerThreeCss.cardsContainer}>
                            <div className={headerThreeCss.card1}>
                                <p>Place an Order!</p>
                                <img src={orderFood} />
                                <p>Place order through our website or Mobile app</p>
                            </div>
                            <div className={headerThreeCss.card1}>
                                <p>Track Progress</p>
                                <img src={order} />
                                <p>Your can track your order status with delivery time </p>
                            </div>
                            <div className={headerThreeCss.card1}>
                                <p>Get your Order!</p>
                                <img src={food} />
                                <p>Receive your order at a lighting fast speed!</p>
                            </div>
                        </div>
                        <div className={headerThreeCss.cardText}>
                            <p>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={headerThreeCss.regisNumberContainer}>
                <div className={headerThreeCss.regRide}>
                    <div className={headerThreeCss.regNumber}>
                        <h2>546+</h2>
                        <p>Registered Riders</p>
                    </div>
                    <div className={headerThreeCss.rightBorder}>

                    </div>
                </div>
                <div className={headerThreeCss.regRide}>
                    <div className={headerThreeCss.regNumber}>
                        <h2>546+</h2>
                        <p>Registered Riders</p>
                    </div>
                    <div className={headerThreeCss.rightBorder}>

                    </div>
                </div>
                <div className={headerThreeCss.regRide}>
                    <div className={headerThreeCss.regNumber}>
                        <h2>546+</h2>
                        <p>Registered Riders</p>
                    </div>
                    <div className={headerThreeCss.rightBorder}>

                    </div>
                </div>
                <div className={headerThreeCss.regRide}>
                    <div className={headerThreeCss.regNumber}>
                        <h2>546+</h2>
                        <p>Registered Riders</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HeaderThree;
