import {React,useContext,useState} from 'react';
import profileCss from './Profile.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Profile from '../../Components/Profile/Profile';
import Modal from '../../Components/Modal/Modal';
import { StoreContext } from '../../Components/Context/StoreContext';

function ProfilePage() {
  const {addCard, setAddCard,handleOnModal} = useContext(StoreContext)

  return (
    <div className={profileCss.container}>
      {addCard? <div className={profileCss.modalContainer}>
         <Modal/>
         </div> :""}
        <Navbar/>
        <Profile handleOnModal={handleOnModal} />
        <Footer/>
    </div >
  )
}

export default ProfilePage;
