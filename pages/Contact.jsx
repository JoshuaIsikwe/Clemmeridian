import React, { useLayoutEffect, useRef } from 'react'
import { FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdAlternateEmail, } from "react-icons/md";

const Contact = () => {

  //const inputGroupRef = useRef();
  const inputRef = useRef();

  useLayoutEffect(()=>{
    inputRef.current.focus()

    // const handleFocus = () => inputGroupRef.current.classList.add(active)
    // const handleBlur = () => inputGroupRef.current.classList.remove(active)

    // current.addEventListener('focus', handleFocus)
    // current.addEventListener('blur', handleBlur)

    // return ()=>{
    //   current.removeEventListener('focus', handleFocus)
    //   current.removeEventListener('blur', handleBlur)
    // }
  },[])



  return (
   <div className='contact'>
       <div className='page-title text-center text-4xl m-24'>
            <h1>CONTACT US</h1>
            <div className='line'></div>
        </div>
        
     
    <div className='contact-container'>
      <span className='big-circle'></span>
      <div className='form'>
        <div className='contact-info'>
          <h3 className='title'>Lets get in touch</h3>
          <p className='text'> For my information on anything regarding the company and our services contact us here.</p>
          <div className='info'>
            <div className='information'>
              <MdAlternateEmail className='mr-5'/>
              <p>Enquiry@clemmeridian.com</p>
            </div>
            <div className='information'>
              <FaPhone className='mr-5'/>
              <p>234 345 4549 3390</p>
            </div>
            
          </div>

          <div className='social-media'>
            <p>Connect with us:</p>
            <div className='social-icons'>
              <a href=''>
                <FaFacebook className='text-3xl m-auto'/>
              </a>
              <a href=''>
                <FaLinkedin className='text-3xl m-auto'/>
              </a>
            </div>
          </div>
        </div>
        <div className='contact-form' >
          <span className='circle one'></span>
          <span className='circle two'></span>

          <form action='' >
            <h3 className='form-title'>Contact us</h3>
            <div className='input-container' >
              <input type='text'
                ref={inputRef}
               name='name' className='input' placeholder='Full name'/>
              
              <span>Full name</span>
            </div>
            <div className='input-container' >
              <input type='tel' 
                ref={inputRef}
              name='number' className='input' placeholder='Phone number'/>
              
              <span>Phone number</span>
            </div>
            <div className='input-container' >
              <input type='email' 
                ref={inputRef}
              name='email' className='input' placeholder='Email-address'/>
              
              <span>Email-address</span>
            </div>
            <div className='input-container ' >
              <textarea 
                ref={inputRef}
              name='message' className='input' placeholder='Message'></textarea>
              
              <span>Message</span>
            </div>
            <input type='submit' value='send' className='button bg-sky-700 hover:bg-slate-200'/>
          </form>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Contact