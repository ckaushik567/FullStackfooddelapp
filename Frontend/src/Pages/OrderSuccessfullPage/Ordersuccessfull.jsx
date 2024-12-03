import React from 'react';
import orderCss from './Order.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import OrderSuccesFull from '../../Components/OrderSuccesFull/OrderSuccesFull';
import Footer from '../../Components/Footer/Footer';

function Ordersuccessfull() {
  return (
     <div className={orderCss.container}>
        <Navbar/>
        <OrderSuccesFull/>
        <Footer/>
     </div>
  )
}

export default Ordersuccessfull
