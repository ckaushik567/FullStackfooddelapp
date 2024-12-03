import React from 'react';
import signinCss from './Signinpage.module.css';
import Signin from '../../Components/Signin/Signin'
import Footer from '../../Components/Footer/Footer';

function Signinpage() {
  return (
     <div className={signinCss.container}>
        <Signin/>
        <Footer/>
     </div>
  )
}

export default Signinpage
