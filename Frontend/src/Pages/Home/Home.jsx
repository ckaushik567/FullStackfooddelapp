import React from 'react';
import homeCss from './Home.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Header2 from '../../Components/Header2/Header2';
import HeaderThree from '../../Components/HeaderThree/HeaderThree';
import Footer from '../../Components/Footer/Footer';
import Restourants from '../../Components/Restourants/Restourants';

function Home() {
    return (
        <div className={homeCss.container}>
            <Navbar />
            <div className={homeCss.HeaderContainer}>
                <Header />
                <div className={homeCss.Header2Container}>
                    <Header2 />
                </div>
                <div className={homeCss.restourantContainer}>
                    <Restourants/>
                </div>
                <div className={homeCss.headerthreeContainer}>
                    <HeaderThree/>
                </div>
                <div className={homeCss.footerContainer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Home
