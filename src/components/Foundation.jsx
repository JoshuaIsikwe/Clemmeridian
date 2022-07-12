import React from 'react'
import foundation from '../images/Foundation.jpg'
import "./style.css"


const Foundation = () => {
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