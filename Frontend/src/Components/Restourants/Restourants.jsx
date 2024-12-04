import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import restourantCss from './Restourant.module.css';
import { StoreContext } from '../Context/StoreContext';
import restImg1 from '../../assets/restImg1.png';

function Restourants() {
  const { handleOnRest } = useContext(StoreContext);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://fullstackfooddelapp-9.onrender.com/restData');
        const data = await response.json();
        setRestaurants(data.restDatas);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleRestaurantClick = (e,id) => {
    e.stopPropagation();
    handleOnRest(e,id);
  };
  if (loading) {
    return <div className={restourantCss.container}>Loading...</div>;
  }

  return (
    <div className={restourantCss.container}>
      <div className={restourantCss.restHeading}>
      <h1>{location.pathname === "/home" ? "Popular Restaurants" : "Similar Restaurants"}</h1>
      </div>
      <div className={restourantCss.restImages}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={restourantCss.restImage}>
            <img src={`https://fullstackfooddelapp-9.onrender.com/images/${restaurant.image}`} alt={restaurant.Name} />
            <p onClick={(e) => handleRestaurantClick(e, restaurant.id)}>
              {restaurant.Name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restourants;














// import React, { useContext } from 'react';
// import restourantCss from './Restourant.module.css';
// import restImg1 from '../../assets/restImg1.png';
// import restImg2 from '../../assets/restImg2.png';
// import restImg3 from '../../assets/restImg3.png';
// import restImg4 from '../../assets/restImg4.png';
// import restImg5 from '../../assets/restImg5.png';
// import restImg6 from '../../assets/restImg6.png'
// import { StoreContext } from '../Context/StoreContext';


// function Restourants() {

//     const {handleOnRest} = useContext(StoreContext);
     
//   return (
//      <div className={restourantCss.container}>
//         <div className={restourantCss.restHeading}>
//             <h1 onClick={(e)=>handleOnRest(e)}>Popular Restaurants</h1>
//         </div>
//         <div className={restourantCss.restImges}>
//             <div className={restourantCss.restImg1}>
//                 <img src={restImg1}/>
//                 <p onClick={(e)=>handleOnRest(e)}>McDonald’s London </p>
//             </div>
//             <div className={restourantCss.restImg1}>
//                 <img src={restImg2}/>
//                 <p onClick={(e)=>handleOnRest(e)}>Papa Johns</p>
//             </div>
//             <div className={restourantCss.restImg1}>
//                 <img src={restImg3}/>
//                 <p onClick={(e)=>handleOnRest(e)}>KFC West London</p>
//             </div>
//             <div className={restourantCss.restImg1}>
//                 <img src={restImg4}/>
//                 <p onClick={(e)=>handleOnRest(e)}>Texas Chicken</p>
//             </div>
//             <div className={restourantCss.restImg1}>
//                 <img src={restImg5}/>
//                 <p onClick={(e)=>handleOnRest(e)}>Burger King</p>
//             </div>
//             <div className={restourantCss.restImg1}>
//                 <img src={restImg6}/>
//                 <p onClick={(e)=>handleOnRest(e)}>Shaurma 1</p>
//             </div>
//         </div>
//      </div>
//   )
// }

// export default Restourants
