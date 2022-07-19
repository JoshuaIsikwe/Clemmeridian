import gsap, { Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import { useEffect } from 'react'
import investment from  "../images/Investment1.jpg"

gsap.registerPlugin(ScrollTrigger)
const Investment = () => {
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
      <img src={investment} alt="Clemmeridian Investment" />
      <div class="division-title">Clemmeridian Investment Ltd</div>
      <div class="division-line"></div>
    </div>
    <div className="foundation-body">
        <div>
            
            <div className='line-1'></div>
         
            <div className='section-1'>
              <div className='left-section' >
              
              <p className='p-bold'>Identification and development of investment and business opportunities in Africa</p>
              <p>
              Investors are in search of new markets and opportunities. Almost all markets except Africa are crowded up. Consequently, the remaining great frontier is Africa as every challenge there presents a great business opportunity!
              </p>
            <h5>We identify these opportunities and structure them into profitable projects for relevant entities, to the benefit of all stakeholders. These include:</h5>
            <ul>
              <li>Infrastructural opportunities and projects.</li>
              <li>Major bids/tenders for public and private sector supplies.</li>
              <li>Bulk supplies of petroleum and agricultural products.</li>
              <li>Power generation opportunities structured with Power Purchase Agreements from relevant government agencies.</li>
            </ul>
              </div>
              <i class="fa-solid fa-chart-line"></i>
              
            </div>
        </div>
    </div>
</div>
  )
}

export default Investment