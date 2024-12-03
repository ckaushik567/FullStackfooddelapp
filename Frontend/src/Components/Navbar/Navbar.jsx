import React, { useContext, useState } from 'react';
import navbarCss from './Navbar.module.css';
import locationlogo from '../../assets/Location.png';
import basketLogo from '../../assets/Basket.png';
import forButton from '../../assets/Forbutton.png';
import logo from '../../assets/LOGO 1.png';
import userLogo from '../../assets/Male User.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import profileImg from '../../assets/profileImg.png';
import shoppingBasket from '../../assets/Shopping Basket.png';

function Navbar() {
    const {nav,setNav} = useContext(StoreContext);
    const {userName,token} = useContext(StoreContext);
    const {cart,setCart} = useContext(StoreContext);
    const navigate = useNavigate();
    let windowWidth = window.innerWidth;
    console.log(windowWidth)

    function handleOnNavigate(){
        if(token){
            navigate('/profile');
        }
        else {
            navigate('/')
        }
    }

    function handleOnCart(){
        setCart(true);
    }

    return (
        <>
        {windowWidth >=345 ?
        (<div className={navbarCss.mainContainer}>
            <div className={navbarCss.container}>
                <div className={navbarCss.headingSection}>
                    <h4>🌟    Get 5% Off your first order, <span id={navbarCss.highlitedText}>Promo: ORDER5</span></h4>
                </div>
                <div className={navbarCss.cartSection}>
                    <div className={navbarCss.address}>
                        <img src={locationlogo} />
                        <h4> Regent Street, A4, A4201, London <span id={navbarCss.highlitedText1}>Change Location</span></h4>
                    </div>
                    <div className={navbarCss.cartSections}>
                        <div onClick={handleOnCart} className={navbarCss.firstSection}>
                            <img src={basketLogo} />
                            <h4>My Cart</h4>
                        </div>
                        <div className={navbarCss.secondSection}>
                        </div>
                        <div className={navbarCss.thirdSection}>
                            <img src={forButton} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={navbarCss.navbarDownContainer}>
                <div className={navbarCss.logo}>
                    <img src={logo} />
                </div>
                <div className={navbarCss.menuSection}>
                    <ul>
                        <Link onClick={()=>setNav("Home")} className={ nav=='Home'?navbarCss.active :navbarCss.link} to='/home'>Home</Link>
                        <li>Browse Menu</li>
                        <li>Special Offers</li>
                        <Link onClick={()=>setNav("Restourants")} className={ nav=='Restourants'?navbarCss.active :navbarCss.link} to='/product'>Restourants</Link>
                        <li>Track Order</li>
                        <li onClick={handleOnNavigate} id={navbarCss.btn}>{token ? <button> <img src={userLogo}/>Hey {userName}</button> : <button> <img src={userLogo}/>Login/Signup</button>}</li>
                    </ul>
                </div>
            </div>
        </div>
        )
        :
        (<div className={navbarCss.responsiveContainer}>
            <div className={navbarCss.navbarDownContainer}>
                <div className={navbarCss.logo}>
                    <img src={logo} />
                </div>
                <div className={navbarCss.menuSection}>
                <i class="fa-solid fa-bars"></i>
                </div>
            </div>
             
            <div className={navbarCss.cartContainer}>
                <div className={navbarCss.profileSectio}>
                    <img src={profileImg} />
                    <h3>Hey {userName}</h3>
                </div>
                <div className={navbarCss.cartSection}>
                    <img src={shoppingBasket} />
                    <h3>My Cart</h3>
                </div>
            </div>
            <div className={navbarCss.addressSection}>
                <p> <img src={locationlogo}/> Lution Street, N4G-00....</p>
            </div>
        </div>)
    }
    </>
    )
}

export default Navbar
