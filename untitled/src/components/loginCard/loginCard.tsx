
import { FC, useState } from 'react';
import './levelsCard.css'
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");


    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
       //todo
    }


    <form>


        <label htmlFor="email"> Email</label>
        <input value={email} type='email' id="email" placeholder="example@gmail.com" name="email" />


        <label htmlFor="password"> Email</label>
        <input value={password} type='password' id="password" placeholder="example@gmail.com" name="password" onChange={() => { handleSubmit }} />


        <button>Login</button>
    </form>
}