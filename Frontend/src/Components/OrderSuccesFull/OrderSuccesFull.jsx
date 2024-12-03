import React from 'react';
import orderSucessCss from './OrderSuccesFull.module.css';
import CheckCircleImg from '../../assets/CheckCircle.png';
import { Link } from 'react-router-dom';

function OrderSuccesFull() {
    return (
        <div className={orderSucessCss.container}>
            <img src={CheckCircleImg} />
            <h3>Order Placed Successfully</h3>
            <div className={orderSucessCss.orderPara}>
                <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
            </div>
            <div className={orderSucessCss.backtohomeContainer}>
                <p>Royal Cheese Burger</p>
                <p>Potato Veggies</p>
                <p>Coke Coca Cola</p>
                <Link to='/home'><button>Back to Home</button></Link>
            </div>
        </div>
    )
}

export default OrderSuccesFull
