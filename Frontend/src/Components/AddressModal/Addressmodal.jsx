import { React, useContext, useState } from 'react';
import addressmodalCss from './Addresmodal.module.css';
import { StoreContext } from '../Context/StoreContext';

function Addressmodal() {
  const { setAddress, isUpadte,setIsUpdate } = useContext(StoreContext);
  const { addressData, setAddressData ,editId } = useContext(StoreContext);
   

  const [inputData, setInputData] = useState({
    State: "",
    City: "",
    PinCode: "",
    Mobile: "",
    Address: ""
  });

  function handleOnInput(e) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }
  async function saveAddress() {

    const method = isUpadte ? 'PUT' : 'POST';
    const url = isUpadte
      ? `https://fullstackfooddelapp-9.onrender.com/${editId}`  // Use the ID for PUT (update)
      : 'https://fullstackfooddelapp-9.onrender.com/address';

    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(inputData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    console.log(data);

    if (isUpadte) {
      setAddressData((prevAddressData) => 
        prevAddressData.map((address) => 
          address.id === data.address.id ? data?.address : address
        )
      );
      setAddress(false);
      setIsUpdate(false)
    }
    else{
      setAddressData([...addressData, data.address]);
      setAddress(false);
    }
  }

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  return (
    <div className={addressmodalCss.container}>
      <div className={addressmodalCss.mainContainer}>
        <div className={addressmodalCss.heading}>
          <p>Add Address</p>
        </div>
        <div className={addressmodalCss.boxContainer}>
          <div className={addressmodalCss.box1}>
            <select name='State' value={inputData} onChange={handleOnInput}>
              <option disabled value="">State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className={addressmodalCss.box2}>
            <input name='City' type="text" placeholder='City/District' onChange={handleOnInput} />
          </div>
          <div className={addressmodalCss.box3}>
            <input name='PinCode' type="text" placeholder='Pin Code' onChange={handleOnInput} />
          </div>
          <div className={addressmodalCss.box4}>
            <input name='Mobile' type="text" placeholder='Phone Number' onChange={handleOnInput} />
          </div>
        </div>
        <div className={addressmodalCss.textAreaContainer}>
          <textarea onChange={handleOnInput} name="Address" id="" cols="30" placeholder='Enter full address'></textarea>
          <button onClick={saveAddress}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Addressmodal
