import React, { useState, useEffect } from 'react';
import reviewsCss from './Reviews.module.css';
import backBtn from '../../assets/Back.png';
import rightBtn from '../../assets/right.png';
import profileImg from '../../assets/profile.png';
import ratingStar from '../../assets/ratingStar.png';
import profileRating from '../../assets/ratingProfile.png'

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const apiEndpoint = 'http://localhost:3000/reviewsData';

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setReviews(data.reviewsDatas);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  console.log(reviews)

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);

  const handleRightClick = () => {
    if (currentIndex + itemsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className={reviewsCss.container}>
      <div className={reviewsCss.mainContainer}>
        <div className={reviewsCss.reviewHeadingSection}>
          <div className={reviewsCss.reviewHeading}>
            <h1>Customer Reviews</h1>
          </div>
          <div className={reviewsCss.leftRightbtn}>
            <button onClick={handleLeftClick} disabled={currentIndex === 0}>
              <img src={backBtn} alt="Back" />
            </button>
            <button
              onClick={handleRightClick}
              disabled={currentIndex + itemsPerPage >= reviews.length}
            >
              <img src={rightBtn} alt="Next" />
            </button>
          </div>
        </div>
        <div className={reviewsCss.reviewBox}>
          {visibleReviews.map((item) => (
            <div key={item.id} className={reviewsCss.reviewBox1}>
              <div className={reviewsCss.innerBox}>
                <div className={reviewsCss.profileImg}>
                  <div className={reviewsCss.imgSec}>
                    <img src={`http://localhost:3000/images/${item.image}`} alt="Profile" />
                  </div>
                  <div className={reviewsCss.line}></div>
                  <div className={reviewsCss.profileText}>
                    <p>{item.Name}</p>
                    <span>{item.Location}</span>
                  </div>
                </div>
                <div className={reviewsCss.ratingStar}>
                  <img src={ratingStar} alt="Rating Star" />
                  <p>{item.date}</p>
                </div>
              </div>
              <div className={reviewsCss.paraText}>
                <p>{item.Text}</p>
              </div> 
            </div>
          ))}
          <div className={reviewsCss.profileRatingSatar}>
                <img src={profileRating} />
                </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;













// import React from 'react';
// import reviewsCss from './Reviews.module.css';
// import backBtn from '../../assets/Back.png';
// import rightBtn from '../../assets/right.png';
// import profileImg from '../../assets/profile.png';
// import ratingStar from '../../assets/ratingStar.png';

// function Reviews() {
//   return (
//      <div className={reviewsCss.container}>
//         <div className={reviewsCss.mainContainer}>
//             <div className={reviewsCss.reviewHeadingSection}>
//                 <div className={reviewsCss.reviewHeading}>
//                     <h1>Customer Reviews</h1>
//                 </div>
//                 <div className={reviewsCss.leftRightbtn}>
//                     <button><img src={backBtn}/></button>
//                     <button><img src={rightBtn} /></button>
//                 </div>
//             </div>
//             <div className={reviewsCss.reviewBox}>
//                 <div className={reviewsCss.reviewBox1}>
//                     <div className={reviewsCss.innerBox}>
//                         <div className={reviewsCss.profileImg}>
//                             <div className={reviewsCss.imgSec}>
//                             <img src={profileImg}/>
//                             </div>
//                             <div className={reviewsCss.line}>
                                
//                             </div>
//                             <div className={reviewsCss.profileText}>
//                                 <p>St Glx</p>
//                                 <span>South London</span>
//                             </div>

//                         </div>
//                         <div className={reviewsCss.ratingStar}>
//                             <img src={ratingStar} />
//                             <p>24th September, 2023</p>
//                         </div>
//                     </div>
//                     <div className={reviewsCss.paraText}>
//                         <p>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
//                     </div>
//                 </div>

//                 <div className={reviewsCss.reviewBox1}>
//                     <div className={reviewsCss.innerBox}>
//                         <div className={reviewsCss.profileImg}>
//                             <div className={reviewsCss.imgSec}>
//                             <img src={profileImg}/>
//                             </div>
//                             <div className={reviewsCss.line}>
                                
//                             </div>
//                             <div className={reviewsCss.profileText}>
//                                 <p>St Glx</p>
//                                 <span>South London</span>
//                             </div>

//                         </div>
//                         <div className={reviewsCss.ratingStar}>
//                             <img src={ratingStar} />
//                             <p>24th September, 2023</p>
//                         </div>
//                     </div>
//                     <div className={reviewsCss.paraText}>
//                         <p>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
//                     </div>
//                 </div>
//                 <div className={reviewsCss.reviewBox1}>
//                     <div className={reviewsCss.innerBox}>
//                         <div className={reviewsCss.profileImg}>
//                             <div className={reviewsCss.imgSec}>
//                             <img src={profileImg}/>
//                             </div>
//                             <div className={reviewsCss.line}>
                                
//                             </div>
//                             <div className={reviewsCss.profileText}>
//                                 <p>St Glx</p>
//                                 <span>South London</span>
//                             </div>

//                         </div>
//                         <div className={reviewsCss.ratingStar}>
//                             <img src={ratingStar} />
//                             <p>24th September, 2023</p>
//                         </div>
//                     </div>
//                     <div className={reviewsCss.paraText}>
//                         <p>The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      </div>
//   )
// }

// export default Reviews
