import React from 'react'

const inputs = document.querySelectorAll(".input");
function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add("focus")
}

inputs.forEach((input) =>{
  input.addEventListener("focus", focusFunc);
})

const Contact = () => {
  return (
   <div className="contact">
     <div className="page-title">
            <h1>Contact us</h1>
            <div className='line'></div>
        </div>
     
    <div className="contact-container">
      <div className="form">
        <div className="contact-info">

        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="">
            <h3 className='form-title'>Contact us</h3>
            <div className="input-container focus">
              <input type="text" name='name' className='input'/>
              <label htmlFor=""> Full Name</label>
              <span>Full name</span>
            </div>
            <div className="input-container">
              <input type="tel" name='number' className='input'/>
              <label htmlFor="">Phone Number</label>
              <span>Phone number</span>
            </div>
            <div className="input-container">
              <input type="email" name='email' className='input'/>
              <label htmlFor=""> Email-address</label>
              <span>Email-address</span>
            </div>
            <div className="input-container">
              <textarea name="message" className='input'></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="send" className="btn"/>
          </form>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Contact