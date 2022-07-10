import React from 'react'
import consult from  "../images/consult.jpg"

const Consult = () => {
  return (
    <div>
    <div className="header">
    <img src={consult} alt="" />
    </div>
    <div className="foundation-body">
        <div>
            <h3>CLEMMERIDIAN CONSULTS</h3>
            <div className='line'></div>
         
            <div className='section-1'>
              <div className='left-section' >
                <h5>Clemmeridian Consults is a subsidiary of the group and specializes in tax and financial management consulting.</h5>
                <p>Provides strategic advisory services to State Internal Revenue Services and tax authorities on tax revenue growth.
                The services rendered by Clemmeridian Consults, being a tax and financial advisory entity include: 
                </p>
            <ul>
              <li>Provision of tax management consultancy services to public and private organisations. </li>
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