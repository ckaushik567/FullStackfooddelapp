import React from 'react';
import AuthenticationCss from './Authentication.module.css';
import Signup from '../../Components/Signup/Signup';
import Footer from '../../Components/Footer/Footer';

function Authentication() {
  return (
     <div className={AuthenticationCss.container}>
      <Signup/>
      <Footer/>
     </div>
  )
}

export default Authentication
