import React from 'react'
import together from  "../images/together.jpg"

const inputs = document.querySelectorAll(".input");
function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc(){
  let parent = this.parentNode;
  if (this.value==""){
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) =>{
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})

const Contact = () => {
  return (
   <div className="contact">
     <div className="page-title">
            <h1>Contact us</h1>
            <div className='line'></div>
        </div>
     
    <div className="contact-container">
      <span className="big-circle"></span>
      <div className="form">
        <div className="contact-info">
          <h3 className='title'>Lets get in touch</h3>
          <p className='text'> For my information on anything regarding the company annd it services contact us here.</p>
          <div className="info">
            <div className="information">
            <i class="fa-solid fa-envelope icon"></i>
              <p>Enquiry@clemmeridian.com</p>
            </div>
            <div className="information">
            <i class="fa-solid fa-phone icon"></i>
              <p>234 345 4549 3390</p>
            </div>
            
          </div>

          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="">
            <h3 className='form-title'>Contact us</h3>
            <div className="input-container">
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
            <div className="input-container ">
              <textarea name="message" className='input'></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="send" className="button"/>
          </form>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Contact