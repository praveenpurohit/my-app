import './style.css';
import React from 'react';

export default function PasswordValidation(){
    return(
        <>
        <h1>Password validation</h1>
        <label>Pasword</label>
        <input type='text' placeholder='enter password'/>
        <label>Confirm Pasword</label>
        <input type='text' placeholder='enter confirm password'/>
        </>
    );
}