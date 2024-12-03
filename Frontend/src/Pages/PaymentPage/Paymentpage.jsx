import React from 'react';
import paymentCss from './Payment.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Payment from '../../Components/Payment/Payment';
import Footer from '../../Components/Footer/Footer';

function Paymentpage() {
  return (
    <div className={paymentCss.container}>
        <Navbar/>
        <Payment/>
        <Footer/>
    </div>
  )
}

export default Paymentpage
