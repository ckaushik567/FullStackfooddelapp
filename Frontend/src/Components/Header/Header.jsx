import React from 'react';
import headerCss from './Header.module.css';
import img from '../../assets/img1.png';
import img1 from '../../assets/img2.png';
import img2 from '../../assets/image 1.png';
import logo from '../../assets/LOGO 1.png';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import nextPageBtn from '../../assets/Nextpage.png'

function Header() {
    let windowWidth = window.innerWidth;
    return (
        <>
        {windowWidth >=345 ?
        (<div className={headerCss.container}>
            <div className={headerCss.headings}>
                <p>Order Restaurant food, takeaway and groceries.</p>
                <h2>Feast Your Senses,<span>Fast and Fresh</span></h2>
                <p>Enter a postcode to see what we deliver</p>
                <div className={headerCss.inputSection}>
                    <input type="text" placeholder='youremail@gmail.com' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className={headerCss.imgSection}>
                <img src={img} />
            </div>
            <div className={headerCss.img1}>
                <img src={img1} />
            </div>
            <div className={headerCss.img2}>
                <img src={img2} />
            </div>
            <div className={headerCss.box1}>
                <div className={headerCss.logo}>
                    <img src={logo} />
                    <div className={headerCss.texts}>
                        <p>We’ve Received your order!</p>
                        <p id={headerCss.para}>Awaiting Restaurant acceptance </p>
                    </div>
                </div>
                <div className={headerCss.message}>
                    <p>now</p>
                </div>
            </div>
            <div className={headerCss.box2}>
                <div className={headerCss.logo}>
                    <img src={logo} />
                    <div className={headerCss.texts}>
                        <p>We’ve Received your order!</p>
                        <p id={headerCss.para}>Awaiting Restaurant acceptance </p>
                    </div>
                </div>
                <div className={headerCss.message}>
                    <p>now</p>
                </div>
            </div>
            <div className={headerCss.box3}>
                <div className={headerCss.logo}>
                    <img src={logo} />
                    <div className={headerCss.texts}>
                        <p>We’ve Received your order!</p>
                        <p id={headerCss.para}>Awaiting Restaurant acceptance </p>
                    </div>
                </div>
                <div className={headerCss.message}>
                    <p>now</p>
                </div>
            </div>
            <div className={headerCss.numberImg}>
                <img src={one} />
            </div>
            <div className={headerCss.numberImg1}>
                <img src={two} />
            </div>
            <div className={headerCss.numberImg2}>
                <img src={three} />
            </div>
        </div>)
        :
        (<div className={headerCss.mobileConatiner}>
            <p>Order Restaurant food, takeaway and groceries.</p>
            <h1>Feast Your Senses,</h1>
            <h1 id={headerCss.highlited}>Fast and Fresh</h1>
            <p>Enter a postcode to see what we deliver</p>
            <div className={headerCss.mobileInput}>
                <input type="text" />
                <button><img src={nextPageBtn} /></button>
            </div>
        </div>)
        }
        </>
    )
}

export default Header
