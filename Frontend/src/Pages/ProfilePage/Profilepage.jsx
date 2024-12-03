import React, { useContext, useState } from 'react';
import profileCss from './Profile.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Profile from '../../Components/Profile/Profile';
import Footer from '../../Components/Footer/Footer';
import { StoreContext } from '../../Components/Context/StoreContext';
import Modal from '../../Components/Modal/Modal';

function Profilepage() {
   const [addCard, setAddCard] = useState(false)

   function handleOnModal() {
      return setAddCard(true);
   }
   console.log(addCard)
   return (
      <div className={profileCss.container}>
         <Navbar />
         <div className={profileCss.modalContainer}>
         <Modal/>
         </div>
         <Profile handleOnModal={handleOnModal} />
         <Footer />
      </div>
   )
}

export default Profilepage
