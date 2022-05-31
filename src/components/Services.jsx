import React from 'react'
import "./style.css"
import investment from  "../images/Investment.jpg"
import consult from  "../images/consult.jpg"
import trade from  "../images/trade.jpg"

const Services = () => {
  return (
    <div className='services'>
        <div className="page-title">
            <h1>Our Services</h1>
            <div className='line'></div>
        </div>
        
        <div className="service-section">
          <div className="service-card">
            <div className='services-box-name'><h2>Investment</h2></div>
            <div className='services-box-icon'><img src={investment} alt="" /></div>
          </div>
          <div className="service-card">
            <div className='services-box-icon'><img src={consult} alt="" /></div>
            <div className='services-box-name'><h2>Consulting & Advisory Services</h2></div>
          </div>
          <div className="service-card">
            <div className='services-box-name'><h2>Trade</h2></div>
            <div className='services-box-icon'><img src={trade} alt="" /></div>
          </div>
        </div>
        
        <div className="industries">
            <h3>Clemmeridian Group so far has been able to work in various industries including</h3>                                  
            <div className="list">
              <ul>Oil & Gas  </ul>
              <ul>Agriculture</ul>
              <ul>Renewable Energy</ul>
              <ul>Financial Services</ul>
              <ul>Transportation</ul>
              <ul>Retail</ul>
              <ul>Public and Social Sector</ul>
              <ul>Private Equity & Principal Investors</ul>
              <ul>Real Estate</ul>
            </div>
        </div>
    </div>
  )
}

export default Services