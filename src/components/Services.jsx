import React from 'react'
import "./style.css"

const Services = () => {
  return (
    <div className='services'>
        <div className="page-title">
            <h1>Our Services</h1>
            <div className='line'></div>
        </div>
        
        <div className="service-section">
          <div className="service-card">
            <div className='services-box-name'>Investment</div>
            <div className='services-box-icon'><i class="fa-solid fa-user"></i></div>
          </div>
          <div className="service-card">
            <div className='services-box-icon'><i class="fa-solid fa-user"></i></div>
            <div className='services-box-name'>Consulting & Advisory Services</div>
          </div>
          <div className="service-card">
            <div className='services-box-name'>Trade</div>
            <div className='services-box-icon'><i class="fa-solid fa-user"></i></div>
          </div>
        </div>
    
        <div className="industries">
            <p>Clemmeridian Group so far has been able to work in various industries including</p>
            <ul></ul>
        </div>
    </div>
  )
}

export default Services