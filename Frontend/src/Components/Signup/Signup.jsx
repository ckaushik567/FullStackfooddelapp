import React, { useContext, useState } from 'react';
import signupCss from './Signup.module.css';
import logo from '../../assets/LOGO 1.png';
import group8 from '../../assets/Group 8.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

function Signup() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        Password: ""
    });

    const [errors, setErrors] = useState({});
    const {token,setToken} = useContext(StoreContext)

    async function handleOnError() {
        setInputData({
            Name: "",
            Email: "",
            PhoneNumber: "",
            Password: ""
        })
        const res = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        if(res.ok){
            setToken(data.token);
            localStorage.setItem('token',data.token);
        }
        let error = {};
        const chars = /[a-zA-Z]/;
        if (inputData.Name == '') {
            error.name = "Name is required";
        }
        if (inputData.Email == '') {
            error.email = "Email is required";
        }
        else if(!inputData.Email.includes('@gmail.com')){
            error.email="This is not valid password"
        }
        else if(res.status==401){
            error.email=data.message
        }
        if (inputData.PhoneNumber == '') {
            error.phoneNumber = "Mobile is required";
        }
        else if(inputData.PhoneNumber.length!==10 && chars.test(inputData.PhoneNumber)){
            error.phoneNumber="This is not valid number"
        }
        if (inputData.Password == '') {
            error.password = "Password is required";
        }
        else if(res.status==400){
            error.password=data.message;
        }
        if (res.ok){
            navigate('/');
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
        <div className={signupCss.container}>
            <div className={signupCss.formSection}>
                <div className={signupCss.mainSection}>
                    <img src={logo} />
                    <div className={signupCss.signinHeading}>
                        <h2>Welcome Back  👋</h2>
                        <p>Today is a new day. It's your day. You shape it.
                            Sign in to start ordering.</p>
                    </div>
                    <div className={signupCss.inputSection}>
                        <div className={signupCss.inputFields}>
                            <label htmlFor="">Name</label>
                            <input name='Name' type="text" placeholder='Example@email.com' onChange={handleOnInput} value={inputData.Name} />
                            <span>{errors.name}</span>
                        </div>
                        <div className={signupCss.inputFields}>
                            <label htmlFor="">Email</label>
                            <input name='Email' type="text" placeholder='Example@email.com' onChange={handleOnInput} value={inputData.Email} />
                            <span>{errors.email}</span>
                        </div>
                        <div className={signupCss.inputFields}>
                            <label htmlFor="">Phone Number</label>
                            <input name='PhoneNumber' type="text" placeholder='Example@email.com' onChange={handleOnInput} value={inputData.PhoneNumber} />
                            <span>{errors.phoneNumber}</span>
                        </div>
                        <div className={signupCss.inputFields}>
                            <label htmlFor="">Password</label>
                            <input name='Password' type="text" placeholder='At least 8 characters' onChange={handleOnInput} value={inputData.Password} />
                            <span>{errors.password}</span>
                        </div>
                    </div>
                    <div className={signupCss.btnSection}>
                        <button onClick={handleOnError}>Sign up</button>
                        <p id={signupCss.text}>Don't you have an account? <span><Link className={signupCss.link} to='/'>Sign in </Link> </span></p>
                    </div>
                </div>
            </div>
            <div className={signupCss.imageSection}>
                <img src={group8} />
            </div>
        </div>
    )
}

export default Signup;
