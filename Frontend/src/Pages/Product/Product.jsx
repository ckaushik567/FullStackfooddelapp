import React, { useState, useEffect, useContext } from 'react';
import productCss from './Product.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import ProductHeader from '../../Components/ProductHeader/ProductHeader';
import Operation from '../../Components/oprations/Operation';
import Reviews from '../../Components/Reviews/Reviews';
import FoodItem from '../../Components/FoodItems/FoodItem';
import Restourants from '../../Components/Restourants/Restourants';
import Footer from '../../Components/Footer/Footer';
import Cart from '../../Components/Cart/Cart';
import axios from "axios";
import { StoreContext } from '../../Components/Context/StoreContext';
import MapContainers from '../../Components/Map/MapContainers';
import { toast } from 'react-toastify';

function Product() {

   // const [foodDatas,setFoodDatas] = useState([]);
   const { foodDatas, setFoodDatas } = useContext(StoreContext)
   // const [cartItem, setCartItems] = useState({});

   const { cartItem, setCartItems } = useContext(StoreContext);
   const { cart, setCart } = useContext(StoreContext);
   const [foods, setFoods] = useState({
      Burgers: [],
      Fries: [],
      ColdDrinks: []

   });

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get("https://fullstackfooddelapp-9.onrender.com/foodItems"); // Replace with your API URL
            const foodData = response.data;
            setFoodDatas(foodData.foodItemData);

            foodData.foodItemData.forEach(item => {
               if (item.Category === "Burger") {
                  setFoods(prevState => ({
                     ...prevState,
                     Burgers: [...prevState.Burgers, item]
                  }));
               }
               if (item.Category === "Fries") {
                  setFoods(prevState => ({
                     ...prevState,
                     Fries: [...prevState.Fries, item]
                  }));
               }
               if (item.Category === "ColdDrinks") {
                  setFoods(prevState => ({
                     ...prevState,
                     ColdDrinks: [...prevState.ColdDrinks, item]
                  }));
               }
            });
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };
      fetchData();
   }, []);
   const addToCart = (itemId) => {
      if (!cartItem[itemId]) {
         setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
         toast.success("Added to cart Successful!")
      }
      else {
         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
         toast.success('Added to cart Successful!')
      };

   }
   const getTotalAmount = () => {
      let cartTotal = 0;
      for (const item in cartItem) {
         if (cartItem[item] > 0) {
            let getInfo = foodDatas.find((product) => product.id == item);
            cartTotal += getInfo.Price * cartItem[item]
         }
      }
      return cartTotal
   }
   return (
      <div className={productCss.container}>
         <Navbar />
         <div className={productCss.cartContainer}>

            <div className={productCss.prodContainer}>
               <ProductHeader />
            </div>
            <div className={productCss.foodItemContainer}>
               <div className={productCss.firstSection}>
                  <div className={productCss.subContainer}>
                     <h2>Burgers</h2>
                     <div className={cart ? productCss.foodItemComp : productCss.foodItemComp1}>
                        {foods.Burgers.map((foodData) => {
                           return <FoodItem addToCart={() => addToCart(foodData.id)} foodName={foodData.FoodName} Description={foodData.Description} Price={foodData.Price} image={foodData.image} />
                        })}
                     </div>
                  </div>
                  <div className={productCss.subContainer}>
                     <h2 id={productCss.heading}>Fries</h2>
                     <div className={cart ? productCss.foodItemComp : productCss.foodItemComp1}>
                        {foods.Fries.map((foodData) => {
                           return <FoodItem addToCart={() => addToCart(foodData.id)} foodName={foodData.FoodName} Description={foodData.Description} Price={foodData.Price} image={foodData.image} />
                        })}

                     </div>
                  </div>
                  <div className={productCss.subContainer}>
                     <h2 id={productCss.heading}>Cold Drinks</h2>
                     <div className={cart ? productCss.foodItemComp : productCss.foodItemComp1}>
                        {foods.ColdDrinks.map((foodData) => {
                           return <FoodItem addToCart={() => addToCart(foodData.id)} foodName={foodData.FoodName} Description={foodData.Description} Price={foodData.Price} image={foodData.image} />
                        })}
                     </div>
                  </div>
               </div>
               {cart ?
                  <div className={productCss.container1}>
                     <Cart foodDatas={foodDatas} cartItem={cartItem} foods={foods} getTotalAmount={getTotalAmount} />
                  </div> : ""}
            </div>
         </div>
         <Operation />
         <MapContainers />
         <Reviews />
         <div className={productCss.Restourants}>
            <Restourants />
         </div>
         <Footer />
      </div>
   )
}

export default Product
