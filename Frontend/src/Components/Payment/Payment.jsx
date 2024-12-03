import React, { useContext } from 'react';
import paymentCss from './Payment.module.css';
import rightArrow from '../../assets/right.png';
import walletImg from '../../assets/Wallet.png'
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

function Payment() {

    const {getTotalAmount} = useContext(StoreContext);
    const navigate = useNavigate();

    function handleOnNavigate(){
        navigate('/orderSuccessfull')
    }

    return (
        <div className={paymentCss.container}>
            <h1>Choose and Pay</h1>
            <div className={paymentCss.mainContainer}>
                <div className={paymentCss.upperContainer}>
                    <div className={paymentCss.addressDitails}>
                        <div className={paymentCss.mapImage}>
                            <img src={walletImg} />
                            <div className={paymentCss.addRessText}>
                                <h3>Delivery Address</h3>
                                <p>45, Green Street, Sector 12...</p>
                            </div>
                        </div>
                        <div className={paymentCss.price}>
                            <img src={rightArrow} />
                        </div>
                    </div>
                    <hr />
                    <div className={paymentCss.paymentCards}>
                        <div className={paymentCss.mapImage}>
                            <img src={walletImg} />
                            <div className={paymentCss.addRessText}>
                                <h3>MaestroKard</h3>
                            </div>
                        </div>
                        <div className={paymentCss.radio}>
                             <input type="radio" />
                        </div>

                    </div>
                    <div className={paymentCss.paymentCards}>
                        <div className={paymentCss.mapImage}>
                            <img src={walletImg} />
                            <div className={paymentCss.addRessText}>
                                <h3>Paypal</h3>
                            </div>
                        </div>
                        <div className={paymentCss.radio}>
                        <input type="radio" />
                        </div>

                    </div>
                    <div className={paymentCss.paymentCards}>
                        <div className={paymentCss.mapImage}>
                            <img src={walletImg} />
                            <div className={paymentCss.addRessText}>
                                <h3>Stripe</h3>
                            </div>
                        </div>
                        <div className={paymentCss.radio}>
                        <input type="radio" />
                        </div>

                    </div>
                    <div className={paymentCss.paymentCards}>
                        <div className={paymentCss.mapImage}>
                             <h3>+</h3>
                            <div className={paymentCss.addRessText}>
                                <h3>Add dabit card</h3>
                            </div>
                        </div>
                         

                    </div>
                </div>
                <div className={paymentCss.PaymentContainer}>
                    <div className={paymentCss.paymentMainCont}>
                        <div className={paymentCss.amountText}>
                            <p>Amount to be payed</p>
                        </div>
                        <div className={paymentCss.paymentAmount}>
                            <h3>₹{getTotalAmount()+10}</h3>
                        </div>
                    </div>
                    <hr />
                    <div className={paymentCss.proccedPaymentBtn}>
                        <button onClick={handleOnNavigate}>Proceed Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
