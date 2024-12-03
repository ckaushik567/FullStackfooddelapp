import React, { useContext } from 'react';
import addressCss from './Address.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Address from '../../Components/Address/Address';
import Footer from '../../Components/Footer/Footer';
import { StoreContext } from '../../Components/Context/StoreContext';
import Addressmodal from '../../Components/AddressModal/Addressmodal';

function Addresspage() {
   const { address, setAddress } = useContext(StoreContext)
   return (
      <div className={addressCss.AddressContainer}>
         {address ? <div className={addressCss.modalContainer}>
            <Addressmodal />
         </div> : ""}
         <Navbar />
         <div className={addressCss.addressContainer}>
            <Address />
         </div>
         <Footer />
      </div>
   )
}

export default Addresspage;
