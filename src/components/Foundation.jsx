import gsap, { Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import { useEffect } from 'react'
import foundation from '../images/Foundation.jpg'
import "./style.css"

gsap.registerPlugin(ScrollTrigger)
const Foundation = () => {
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
        <img src={foundation} alt="Clemmeridian Care Foundation" />
        <div class="division-title">Clemmeridian Care Foundation</div>
        <div class="division-line"></div>
        </div>
        <div className="foundation-body">
            <div>
               
                <div className='line-1'></div>
             
                <div className='section-1'>
                  <div className='left-section' >
                  
                  <h5>
                        Clemmeridian Group has a social burden to give back to the society and this is done through Clemmeridian Care Foundation.
                </h5>
                <p>The focused service areas are:</p>
                <ul>
                  <li>To render humanitarian services in the society.</li>
                  <li>Provision of home for orphans and motherless babies.</li>
                  <li>Provision of welfare services for the widows, needy and underprivileged in the society.</li>
                  <li>Provision of welfare services for the widows, needy and underprivileged in the society.</li>
                  <li>Advancement of sustainable development goals relevant to the children and less privileged in the society. </li>
                  <li>Provision of any other care or support as may be approved by the trustees.</li>
                </ul>
                <h5>Their operation is managed by the CEO is Mrs Sabena Isikwe, a seasoned administrator.</h5>
                  </div>
                  <i class="fa-solid fa-hand-holding-heart"></i>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Foundation