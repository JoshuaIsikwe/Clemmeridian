
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import africa from "../images/Africa.png"
import logo from "../images/logo.png"
const Home = () => {
  return (
    <div className="home">
        <div className="home-header">
          <img src={logo} alt="" />
        </div>
        <div className="home-body">
          <div className="home-description">
            <div className='desc-left'>
            <img src={africa} alt="africa" />
            </div>
            <div className='desc-right'>
              <h2>Untitled</h2>
              
              <p>Clemmeridian Group is a consulting and business development agency with a pan-African focus. With over 30 years of shared shareholder's expertise, Clemmeridian Group takes pride in providing superior Consulting & Advisory Services, Investment, and Trade across Africa. Creating access and services for a class of potential investors by providing investment management and other financial services to intended investors and those looking to explore more about the African market. </p>
              <p>As the decision to invest in Africa becomes more prevalent, we are here to assist you in uncovering economic opportunities that match your focus, assessing potential risks, and navigating through the roadblocks to your intended destination.</p>
              <p>In Clemmeridian we see Africa’s challenges as business opportunities. We are business enablers.</p>
            </div>
            
          </div>
          
          <div className="home-services">
            <div className="services-title">
              <h2>Our services</h2>
            </div>
            <div className="box">
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <h5>Consulting & Advisory Services</h5>
                <div className='pra'>
                  <p>We focus on tax and financial planning</p>
                  <p><a className='button' href="" >Read more</a></p>
                </div>
              </div>
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <h5>Investment</h5>
                <div className='pra'>
                  <p>We focus on business development and research</p>
                  <p><a className='button' href="" >Read more</a></p>
                </div>
              </div> 
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <h5>Trade</h5>
                <div className='pra'>
                  <p>We focus on the importation and exportation of products within the African market and the rest of the world</p>
                  <p><a className='button' href="" >Read more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home