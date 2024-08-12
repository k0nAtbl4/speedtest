
import { FC, useState } from 'react';
import './loginCard.css';
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

type LoginCardProps = {
    log: string
}


function LoginCard(props: LoginCardProps) {
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

    const handleSubmitUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetUsername(e.target.value)
    }
    const handleSubmitPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetPassword(e.target.value)
    }


    type UserRequest = {
        username: string,
        password: string,
    }
    const registerUser = async (userData: UserRequest) => {
        try {
            const response = await axios.post('http://localhost:8000/login', userData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <div className='login_form'>


        {/* <label htmlFor="username"> Username</label> */}
        <input className='username' value={username} type='username' id="username" placeholder="username2004" name="username" onChange={handleSubmitUsername} />


        {/* <label htmlFor="password"> Password</label> */}
        <input className='password' value={password} type='password' id="password" placeholder="password" name="password" onChange={handleSubmitPassword} />


        <button className='login_button' onClick={() => {
            registerUser( {username: username, password: password})
        }}>{props.log}</button>
    </div>
    )
}

export default LoginCard;