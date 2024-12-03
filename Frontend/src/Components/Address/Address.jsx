import React, { useContext, useEffect, useState } from 'react';
import AddressCss from './Address.module.css';
import { StoreContext } from '../Context/StoreContext';

function Address() {
    const { handleOnAddress,handleOnAddress1 } = useContext(StoreContext);
    const {addressData, setAddressData} = useContext(StoreContext);

    useEffect(() => {
        const addressData = async () => {
            const res = await fetch('http://localhost:3000/addressData', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            setAddressData(data.addressDatas)
        }

        addressData();
    }, []);

    async function handleOnRemove(id) {
        try {
            const res = await fetch(`http://localhost:3000/address/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                setAddressData((prevData) =>
                prevData.filter((address) => address.id !== id));
                alert("Address deleted successfully!");
            } else {
                const errorData = await res.json();
                alert(`Failed to delete address: ${errorData.message}`);
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={AddressCss.container}>
            <h1><img src="" /> Your Addresses</h1>
            <div className={AddressCss.addressBoxContainer}>
                <div className={AddressCss.addBox}>
                    <p onClick={() => handleOnAddress()}>+</p>
                    <h3>Add Address</h3>
                </div>
                {addressData.map((item) => {
                    return <div className={AddressCss.addBox1}>
                        <div className={AddressCss.nameSection}>
                            <div className={AddressCss.name}>
                                <h3>Chanchal Kaushik</h3>
                            </div>
                            <div className={AddressCss.defaultBtn}>
                                <p>Default</p>
                            </div>
                        </div>
                        <div className={AddressCss.address}>
                            <p>{item.Address},{item.City}, {item.PinCode}, India</p>
                            <p>Phone Number:  {item.Mobile}</p>
                        </div>
                        <div className={AddressCss.btnSection}>
                            <p onClick={() => handleOnAddress1(item.id)}>Edit</p>
                            <p>|</p>
                            <p onClick={() => handleOnRemove(item.id)}>Remove</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Address
