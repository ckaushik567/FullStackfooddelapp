import React, { useContext, useState, useEffect } from 'react';
import profileCss from './Profile.module.css';
import profileImg from '../../assets/profileImg.png';
import careditCard from '../../assets/credit-card.png';
import pencilImg from '../../assets/pencil.png';
import { StoreContext } from '../Context/StoreContext';

function Profile() {
    const [profileData, setProfileData] = useState(false);
    const [profileDatas, setProfileDatas] = useState([]);
    const { handleOnModal, handleOnCard1, cardDatas, setCardDatas } = useContext(StoreContext);
    const [profileId, setProfileId] = useState(null);
    const [inputData, setInputData] = useState({
        FullName: "",
        Email: "",
        Gender: "",
        Country: "",
    });

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchCardData = async () => {
            const res = await fetch('https://fullstackfooddelapp-9.onrender.com/cardData', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setCardDatas(data.cardDatas);
        };

        fetchCardData();
    }, [setCardDatas]);

    useEffect(() => {
        const fetchProfileData = async () => {
            const res = await fetch('https://fullstackfooddelapp-9.onrender.com/profileData', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            setProfileDatas(data.profileDatas);
        };

        fetchProfileData();
    }, [token]);

    function handleOnInput(e) {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    }
    function handleOnEdit(profile) {
        setProfileData(true);
        setInputData({
            FullName: profile.FullName,
            Email: profile.Email,
            Gender: profile.Gender,
            Country: profile.Country,
        });
        setProfileId(profile.id);
    }

    async function handleOnSave() {
        setProfileData(false);
        try {
            const endpoint = profileId
                ? `https://fullstackfooddelapp-9.onrender.com/profile/${profileId}`
                : 'https://fullstackfooddelapp-9.onrender.com/profile';
            const method = profileId ? 'PUT' : 'POST';

            const res = await fetch(endpoint, {
                method,
                body: JSON.stringify(inputData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) throw new Error('Failed to save profile data');
            const data = await res.json();

            setProfileDatas((prev) =>
                profileId
                    ? prev.map((profile) =>
                          profile.id === profileId ? { ...profile, ...data.profile } : profile
                      )
                    : [...prev, data.profile]
            );
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    }

    return (
        <div className={profileCss.container}>
            <h1>My Profile</h1>
            <div className={profileCss.mainContainer}>
                <div className={profileCss.profileImgContainer}>
                    <div className={profileCss.profileImg}>
                        <img src={profileImg} alt="Profile" />
                    </div>
                    <div className={profileCss.profileName}>
                        <h3>{profileDatas[0]?.FullName || "Your Name"}</h3>
                    </div>
                </div>
                <div className={profileCss.EditBtn}>
                    {profileData ? (
                        <button onClick={handleOnSave}>Save</button>
                    ) : (
                        <button onClick={() => handleOnEdit(profileDatas[0])}>Edit</button>
                    )}
                </div>
            </div>
            <div className={profileData ? profileCss.inputsContainer : profileCss.inputsContainer1}>
                <div className={profileCss.firstInputSection}>
                    <div className={profileCss.firstInput}>
                        <label>Full Name</label>
                        {profileData ? (
                            <input
                                name="FullName"
                                type="text"
                                value={inputData.FullName}
                                onChange={handleOnInput}
                            />
                        ) : (
                            <p>{profileDatas[0]?.FullName}</p>
                        )}
                    </div>
                    <div className={profileCss.firstInput}>
                        <label>Gender</label>
                        {profileData ? (
                            <input
                                name="Gender"
                                type="text"
                                value={inputData.Gender}
                                onChange={handleOnInput}
                            />
                        ) : (
                            <p>{profileDatas[0]?.Gender}</p>
                        )}
                    </div>
                </div>
                <div className={profileCss.secondInputSection}>
                    <div className={profileCss.firstInput}>
                        <label>Email Address</label>
                        {profileData ? (
                            <input
                                name="Email"
                                type="text"
                                value={inputData.Email}
                                onChange={handleOnInput}
                            />
                        ) : (
                            <p>{profileDatas[0]?.Email}</p>
                        )}
                    </div>
                    <div className={profileCss.firstInput}>
                        <label>Country</label>
                        {profileData ? (
                            <input
                                name="Country"
                                type="text"
                                value={inputData.Country}
                                onChange={handleOnInput}
                            />
                        ) : (
                            <p>{profileDatas[0]?.Country}</p>
                        )}
                    </div>
                </div>
            </div>
            <hr />
            <div className={profileCss.savedContainer}>
                <h1>Saved Payment Methods</h1>
                <div className={profileCss.savedCards}>
                    {cardDatas?.map((item) => (
                        <div className={profileCss.card1} key={item.id}>
                            <img id={profileCss.credit} src={careditCard} alt="Card" />
                            <div className={profileCss.creditCardNum}>
                                <h4>{item.CardNumber}</h4>
                                <p>{item.Name}</p>
                            </div>
                            <img
                                onClick={() => handleOnCard1(item.id)}
                                src={pencilImg}
                                alt="Edit"
                            />
                        </div>
                    ))}
                    <div className={profileCss.addCard}>
                        <p onClick={() => handleOnModal()}>+</p>
                        <div className={profileCss.creditCardNum}>
                            <h4>Add New Card</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;








// import React, { useContext, useState, useEffect } from 'react';
// import profileCss from './Profile.module.css';
// import profileImg from '../../assets/profileImg.png';
// import careditCard from '../../assets/credit-card.png';
// import pencilImg from '../../assets/pencil.png';
// import { StoreContext } from '../Context/StoreContext';

// function Profile() {

//     const [profileData, setProfileData] = useState(false);
//     const [profileDatas, setProfileDatas] = useState([]);
//     const { handleOnModal, handleOnCard1, cardDatas, setCardDatas } = useContext(StoreContext);
//     const [profileId,setProfileId] = useState();
//     const token = localStorage.getItem('token')
//     console.log(token)

//     function handleOnEdit() {
//         setProfileData(true);
//     }

//     useEffect(() => {
//         const cardDataFunc = async () => {
//             const res = await fetch('http://localhost:3000/cardData', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // Authorization:`Bearer ${token}`
//                 }
//             })
//             const data = await res.json();
//             setCardDatas(data.cardDatas)
//         }

//         cardDataFunc();
//     }, []);

//     useEffect(() => {
//         const profileDataFunc = async () => {
//             const res = await fetch('http://localhost:3000/profileData', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization:`Bearer ${token}`
//                 }
//             })
//             const data = await res.json();
//             setProfileDatas(data.profileDatas)
//         }

//         profileDataFunc();
//     }, []);


//     const [inputData, setInputData] = useState({
//         FullName: "",
//         Email: "",
//         Gender: "",
//         Country: ""
//     });

//     function handleOnInput(e,id) {
//         setInputData({
//             ...inputData,
//             [e.target.name]: e.target.value
//         });
//         setProfileId(id)
//     }
//     async function handleOnSave(profileId) {
//         setProfileData(false);
//         try {
//             const endpoint =
//                 profileDatas.length === 0
//                     ? 'http://localhost:3000/profile'
//                     : `http://localhost:3000/profile/${profileId}`;
//             const method = profileDatas.length === 0 ? 'POST' : 'PUT';
    
//             const res = await fetch(endpoint, {
//                 method,
//                 body: JSON.stringify(inputData),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
    
//             if (!res.ok) throw new Error('Failed to save profile data');
//             const data = await res.json();
//             setProfileDatas([data.profile]); // Update the state with the new profile
//         } catch (error) {
//             console.error('Error saving profile:', error);
//         }
//     }
    

//     return (
//         <div className={profileCss.container}>
//             <h1>My Profile</h1>
//             <div className={profileCss.mainContainer}>
//                 <div className={profileCss.profileImgContainer}>
//                     <div className={profileCss.profileImg}>
//                         <img src={profileImg} />
//                     </div>
//                     <div className={profileCss.profileName}>
//                         <h3>Chanchal Kaushik</h3>
//                     </div>
//                 </div>
//                 <div className={profileCss.EditBtn}>
//                     {profileData ? <button onClick={()=>handleOnSave(id)}>Save</button> : <button onClick={handleOnEdit}>Edit</button>}
//                 </div>
//             </div>
//             <div className={profileData ? profileCss.inputsContainer : profileCss.inputsContainer1}>
//                 {profileDatas.map((item) => {
//                     return <>
//                         <div className={profileCss.firstInputSection}>
//                             <div className={profileCss.firstInput}>
//                                 <label>Full Name</label>
//                                 {profileData ? <input name='FullName' type="text" onChange={(e)=>handleOnInput(e,item.id)} /> : <p>{item.FullName}</p>}
//                             </div>
//                             <div className={profileCss.firstInput}>
//                                 <label>Gender</label>
//                                 {profileData ? <input name='Gender' type="text" onChange={(e)=>handleOnInput(e,item.id)} /> : <p>{item.Gender}</p>}
//                             </div>
//                         </div>
//                         <div className={profileCss.secondInputSection}>
//                             <div className={profileCss.firstInput}>
//                                 <label>Email Address</label>
//                                 {profileData ? <input name='Email' type="text" onChange={(e)=>handleOnInput(e,item.id)} /> : <p>{item.Email}</p>}
//                             </div>
//                             <div className={profileCss.firstInput}>
//                                 <label>Country</label>
//                                 {profileData ? <input name='Country' type="text" onChange={(e)=>handleOnInput(e,item.id)} /> : <p>{item.Country}</p>}
//                             </div>
//                         </div>
//                     </>
//                 })}
//             </div>
//             <hr />
//             <div className={profileCss.savedContainer}>
//                 <h1>Saved Payment Methods</h1>
//                 <div className={profileCss.savedCards}>
//                     {cardDatas?.map((item) => {
//                         return <div className={profileCss.card1}>
//                             <img id={profileCss.credit} src={careditCard} />
//                             <div className={profileCss.creditCardNum}>
//                                 <h4>{item.CardNumber}</h4>
//                                 <p>{item.Name}</p>
//                             </div>
//                             <img onClick={() => handleOnCard1(item.id)} src={pencilImg} />
//                         </div>
//                     })}
//                     <div className={profileCss.addCard}>
//                         <p onClick={() => handleOnModal()}>+</p>
//                         <div className={profileCss.creditCardNum}>
//                             <h4>Add New Card</h4>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Profile
