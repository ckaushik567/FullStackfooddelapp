import React from 'react';
import header2Css from './Header2.module.css';
import catImg1 from '../../assets/catImg1.png';
import catImg2 from '../../assets/catImg2.png';
import catImg3 from '../../assets/catImg3.png';
import catImg4 from '../../assets/catImg4.png';
import catImg5 from '../../assets/catImg5.png';
import catImg6 from '../../assets/catImg6.png';
import { useState,useEffect } from 'react';

function Header2() {

    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await fetch('http://localhost:3000/categoryData');  // Replace with your actual API endpoint
                const data = await response.json();
                setFoodData(data.categoryDatas);
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchFoodData();
    }, []);

    return (
        <div className={header2Css.container}>
            <div className={header2Css.dealsSection}>
                <div className={header2Css.headingSection}>
                    <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>
                </div>
                <div className={header2Css.menu}>
                    <ul>
                        <li>Vegan</li>
                        <li>Sushi</li>
                        <li id={header2Css.borderStyle} >Pizza & Fast food </li>
                        <li>others</li>
                    </ul>
                </div>
                <div className={header2Css.mobileMenu}>
                    <select>
                        <option value="Pizza & FastFood">Pizza & FastFood</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Sushi">Sushi</option>
                        <option value="others">others</option>
                    </select>

                </div>
            </div>
            <div className={header2Css.categories}>
                <div className={header2Css.dishName}>
                    <div className={header2Css.discount}>
                        <p>-40%</p>
                    </div>
                    <div className={header2Css.dishHead}>
                        <p>Restaurant</p>
                        <h3>Chef Burgers London</h3>
                    </div>
                </div>
                <div className={header2Css.dishName1}>
                    <div className={header2Css.discount}>
                        <p>-40%</p>
                    </div>
                    <div className={header2Css.dishHead}>
                        <p>Restaurant</p>
                        <h3>Chef Burgers London</h3>
                    </div>
                </div>
                <div className={header2Css.dishName2}>
                    <div className={header2Css.discount}>
                        <p>-40%</p>
                    </div>
                    <div className={header2Css.dishHead}>
                        <p>Restaurant</p>
                        <h3>Chef Burgers London</h3>
                    </div>
                </div>
            </div>
            <div className={header2Css.dishCate}>
                <div className={header2Css.catHeading}>
                    <h2>Order.uk Popular Categories 🤩</h2>
                </div>
                <div className={header2Css.cateImg}>
                    {foodData.map((item, index) => (
                        <div key={index} className={header2Css.img1}>
                            <img src={`http://localhost:3000/images/${item.image}`} alt={item.name} />
                            <h4>{item.Name}</h4>
                            <p>{item.restName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header2
