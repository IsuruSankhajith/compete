import React from 'react'
import './LoginSingup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/padlock.png'

export const LoginSingup = () => {
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'> Sing Up</div> 
    <div className='underline'></div>
    </div>
    <div className='inputs'>
    <div className='inputs'> 
    <img src= {user_icon} alt=''/>
    <input type='text' />
    </div>

    <div className='inputs'> 
    <img src= {email_icon} alt=''/>
    <input type='email' />  
    </div>

    <div className='inputs'> 
    <img src= {password_icon} alt=''/>
    <input type='password' />
    </div>
    
    </div>
    </div>
  )
}
