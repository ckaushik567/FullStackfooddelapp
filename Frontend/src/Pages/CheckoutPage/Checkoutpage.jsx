import React from 'react';
import checkoutCss from './Checkout.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Checkout from '../../Components/Checkout/Checkout';
import Footer from '../../Components/Footer/Footer';

function Checkoutpage() {
  return (
     <div className={checkoutCss.container}>
        <Navbar/>
        <Checkout/>
        <Footer/>
     </div>
  )
}

export default Checkoutpage
