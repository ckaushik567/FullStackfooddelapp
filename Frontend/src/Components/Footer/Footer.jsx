import React from 'react';
import footerCss from './Footer.module.css';
import logo from '../../assets/LOGO 1.png';
import playstorelogo from '../../assets/playStorelogo.png';
import facebookIcon from '../../assets/Facebook.png';
import instagramIcon from '../../assets/Instagram.png';
import tiktokIcon from '../../assets/TikTok.png';
import snapchatIcon from '../../assets/Snapchat.png';

function Footer() {
    return (
        <div className={footerCss.container}>
            <div className={footerCss.subContainer}>
                <div className={footerCss.logos}>
                    <img src={logo} />
                    <img id={footerCss.playStoreImg} src={playstorelogo} />
                    <span>Company # 490039-445, Registered with,House of companies.</span>
                </div>
                <div className={footerCss.icons}>
                    <h4>Get Exclusive Deals in your Inbox</h4>
                    <div className={footerCss.inputSection}>
                        <input type="text" placeholder='youremail@gmail.com' />
                        <button>Subscribe</button>
                    </div>
                    <span>we wont spam, read our email policy</span>
                    <div className={footerCss.mediaIcons}>
                        <img src={facebookIcon} />
                        <img src={instagramIcon} />
                        <img src={tiktokIcon} />
                        <img src={snapchatIcon} />

                    </div>
                </div>
                <div className={footerCss.pages}>
                    <ul>
                        <h4>Legal Pages</h4>
                        <li>Terms and conditions</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Moderment</li>
                    </ul>
                </div>
                <div className={footerCss.links}>
                    <ul>
                        <h4>Important Links</h4>
                        <li>Get help</li>
                        <li>Add your restaurant</li>
                        <li>Sign up to deliver</li>
                        <li>Create a business account</li>
                    </ul>
                </div>
            </div>
            <div className={footerCss.subFotterContainer}>
                <div className={footerCss.subFooterMainContainer}>
                    <div className={footerCss.copyrights}>
                        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
                    </div>
                    <div className={footerCss.conditions}>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms</li>
                            <li>Pricing</li>
                            <li>Do not sell or share my personal information</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

