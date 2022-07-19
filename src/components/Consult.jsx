import gsap from 'gsap'
import { Power3 } from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import { useEffect } from 'react'
import consult from  "../images/Consult1.jpg"

gsap.registerPlugin(ScrollTrigger)
const Consult = () => {

  useEffect(()=>{
    gsap.from('.left-section li',{x: -50, opacity:0, ease:Power3.easeOut, delay:1,stagger:0.8,
      scrollTrigger:{
        trigger:'.left-section li',
        toggleActions: 'restart none none none',
      },
    }, 'Start')
  })
  return (
    <div>
    <div className="header">
      <img src={consult} alt="Clemmeridian Consults" />
      <div class="division-title">Clemmeridian Consults</div>
      <div class="division-line"></div>
    </div>
    <div className="foundation-body">
        <div>
            
            <div className='line-1'></div>
         
            <div className='section-1'>
              <div className='left-section' >
              <p className='p-bold'>Strategic consulting & advisory services, business development and training</p>
              
                <h5>Clemmeridian Consults is a subsidiary of the group and specializes in tax and financial management consulting, business development and training.</h5>
                <p>Provides strategic advisory services to State Internal Revenue Services and tax authorities on tax revenue growth.
                The services rendered by Clemmeridian Consults, being a tax and financial advisory entity include: 
                </p>
            <ul>
              <li className='li'>Provision of tax management consultancy services to public and private organisations. </li>
              <li>Develops strategies for the government on how to expand tax revenue base.</li>
              <li>Drafting of tax laws for the government tax agencies.</li>
              <li>Provision of Tax clinics for public and private sector entities.</li>
              <li>Provision of training services on different areas to public and private sector entities.</li>
              <li>Sourcing and structuring of finance for public and private sector entities.</li>
              <li>Sourcing and management of human resources for private sector entities.</li>
              <li>Conducting due diligence for entities.</li>
              <li>Provision of corporate messenger services for entities.</li>
            </ul>

              </div>
              <i class="fa-solid fa-person-chalkboard"></i>
              
            </div>
        </div>
    </div>
</div>
  )
}

export default Consult