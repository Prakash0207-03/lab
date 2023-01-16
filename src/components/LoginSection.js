import React from 'react';
import { Button } from './Button';
import '../App';
import './LoginSection.css'

function LoginSection() {
  return (
    <div className='login-container'>
      <p className='userName'>Username/Email
      <input type='text' className='userName1'></input></p>
      <p className='passWord'>Password
      <input type='password' className='userpassword'></input></p>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--small'
        >
          LOGIN
        </Button>
        <p></p>
        <p></p>

        <p className='signup1'>Don't have an account?</p>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--small'
        >
          SIGN UP
        </Button>
    </div>
  )
}

export default LoginSection
