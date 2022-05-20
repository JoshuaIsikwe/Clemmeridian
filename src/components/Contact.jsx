import React from 'react'

const Contact = () => {
  return (
   <div className="contact">
     <div className="contact-banner">
        <h1>Contact us</h1>
     </div>
      <div className='contact-container'>
      <h1>Contact Information</h1>
      <div className="contact-information">
        <div className="info-items"><i class="fa-solid fa-phone"></i><p>+234 59596 393949</p>
        </div>
        <div className="info-items"><i class="fa-solid fa-at"></i><p>enquiry@clemmeridian.com</p>
        </div>
      </div>
      <p>What do you need to know? Talk to us</p>
      <div className='contact-form'>
          <input className='input' placeholder='Full Name' type="text" />
          <input className='input' placeholder='Email address' type="text" />
          <input className='input' placeholder='Phone number(Optional)' type="text" />
          <input className='text-area' placeholder='Enquiry' type="text" />
          <input type="button" className='btn' name='Submit' />
          
      </div>
    </div>
   </div>
  )
}

export default Contact