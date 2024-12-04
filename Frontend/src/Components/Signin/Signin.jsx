import React, { useContext, useState } from 'react';
import signinCss from './Signin.module.css';
import logo from '../../assets/LOGO 1.png';
import group8 from '../../assets/Group 8.png';
import {  Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

function Signin() {
    const navigate = useNavigate();
    const {userName,setUserName} = useContext(StoreContext) 
    const [inputData, setInputData] = useState({
        Email: "",
        Password: ""
    });

    const [errors, setErrors] = useState({});
    const {token,setToken} = useContext(StoreContext);

    async function handleOnError() {
        setInputData({
            Email: "",
            Password: ""
        })
        const res = await fetch('https://fullstackfooddelapp-9.onrender.com/signin', {
            method: 'POST',
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        setUserName(data.Name?.split(' ')[0]);
        if(res.ok){
            setToken(data.token);
            localStorage.setItem('token',data.token);
        }
        let error = {};
        const chars = /[a-zA-Z]/;

        if (inputData.Email == '') {
            error.email = "Email is required";
        }
        else if(res.status==400){
            error.email=data.message
        }
        if (inputData.Password == '') {
            error.password = "Password is required";
        }
        else if(res.status==404){
            error.password=data.message
        }
        if (res.ok){
             console.log(data.message);
             navigate('/home')

        }
        setErrors(error);
    }

    function handleOnInput(e) {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    };
    return (
        <div className={signinCss.container}>
            <div className={signinCss.formSection}>
                <div className={signinCss.mainSection}>
                    <img src={logo} />
                    <div className={signinCss.signinHeading}>
                        <h2>Welcome Back  👋</h2>
                        <p>Today is a new day. It's your day. You shape it.
                            Sign in to start ordering.</p>
                    </div>
                    <div className={signinCss.inputSection}>
                        <div className={signinCss.inputFields}>
                            <label htmlFor="">Email</label>
                            <input name='Email' type="text" placeholder='Example@email.com' onChange={handleOnInput} value={inputData.Email} />
                            <span>{errors.email}</span>
                        </div>
                        <div className={signinCss.inputFields}>
                            <label htmlFor="">Password</label>
                            <input name='Password' type="text" placeholder='At least 8 characters' onChange={handleOnInput} value={inputData.Password} />
                            <span>{errors.password}</span>
                        </div>
                    </div>
                    <div className={signinCss.btnSection}>
                        <button onClick={handleOnError}>Sign in</button>
                        <span id={signinCss.text}>Don't you have an account? <span><Link className={signinCss.link} to='/signup'>Sign in </Link></span> </span>
                    </div>
                </div>
            </div>
            <div className={signinCss.imageSection}>
                <img src={group8} />
            </div>
        </div>
    )
}

export default Signin
