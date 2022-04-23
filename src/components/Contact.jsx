import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact Us</h2>
      <p>What do you need to know? Talk to us</p>
      <div className='contact-form'>
          <input className='input' placeholder='Full Name' type="text" />
          <input className='input' placeholder='Email address' type="text" />
          <input className='input' placeholder='Phone number(Optional)' type="text" />
          <input className='text-area' placeholder='Enquiry' type="text" />
          
      </div>
    </div>
  )
}

export default Contact