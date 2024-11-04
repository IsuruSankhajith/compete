import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/padlock.png'

export const LoginSignup = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submit logic here
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div> 
        <div className='underline'></div>
      </div>
      
      <form className='input-group' onSubmit={handleSubmit}>
        <div className='input-field'> 
          <img src={user_icon} alt='User icon'/>
          <input type='text' placeholder='Username' required/>
        </div>

        <div className='input-field'> 
          <img src={email_icon} alt='Email icon'/>
          <input type='email' placeholder='Email' required />  
        </div>

        <div className='input-field'> 
          <img src={password_icon} alt='Password icon'/>
          <input type='password' placeholder='Password' required/>
        </div>

        <div className='forgot-password'>
          Lost password? <a href='#' onClick={(e) => e.preventDefault()}>Click here</a>
        </div> 

        <div className='submit-container'>  
          <button className='submit' type='submit'>Sign Up</button>
          <button className='submit' type='button'>Login</button>
        </div>
      </form>
    </div>
  )
}
