import React, { useContext,useState } from 'react';
import modalCss from './Modal.module.css';
import { StoreContext } from '../Context/StoreContext';

function Modal() {
    const { handleOnRemove } = useContext(StoreContext);
    const { setCard, isUpadteCard,setIsUpdateCard } = useContext(StoreContext);
  const { cardDatas, setCardDatas ,editCardId,setAddCard } = useContext(StoreContext);

    const [inputData, setInputData] = useState({
        CardNumber: "",
        Expiration: "",
        CVC: "",
        Name: ""
    });

    function handleOnInput(e) {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }
    async function saveChanges() {

        const method = isUpadteCard ? 'PUT' : 'POST';
        const url = isUpadteCard
            ? `https://fullstackfooddelapp-9.onrender.com/card/${editCardId}`  // Use the ID for PUT (update)
            : 'https://fullstackfooddelapp-9.onrender.com/card';

        const res = await fetch(url, {
            method: method,
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        console.log(data);

        if (isUpadteCard) {
            setCardDatas((prevCardData) =>
                prevCardData.map((card) =>
                    card.id === data.card.id ? data?.card : card
                )
            );
            setAddCard(false);
            setIsUpdateCard(false)
        }
        else {
            setCardDatas([...cardDatas, data.card]);
            setAddCard(false);
        }
    }

    return (
        <div className={modalCss.container}>
            <div className={modalCss.modalContainer}>
                <h2>Edit Payment Method</h2>
                <div className={modalCss.mainContainer}>
                    <div className={modalCss.modalInput}>
                        <label htmlFor="">Card Number</label>
                        <input name='CardNumber' type="text" onChange={handleOnInput} />
                    </div>
                    <div className={modalCss.modalInput}>
                        <label htmlFor="">Expiration</label>
                        <input name='Expiration' type="text" onChange={handleOnInput} />
                    </div>
                    <div className={modalCss.modalInput}>
                        <label htmlFor="">CVC</label>
                        <input name='CVC' type="text" onChange={handleOnInput} />
                    </div>
                    <div className={modalCss.modalInput}>
                        <label htmlFor="">Name on Card</label>
                        <input name='Name' type="text" onChange={handleOnInput} />
                    </div>

                </div>
                <div className={modalCss.modalFooter}>
                    <div className={modalCss.removeBtn}>
                        <button onClick={() => handleOnRemove()}>Remove</button>
                    </div>
                    <div className={modalCss.saveBtn}>
                        <p>Cancel</p>
                        <button onClick={saveChanges}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
