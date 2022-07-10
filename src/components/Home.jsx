
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import africa from "../images/Africa.png"
import logo from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';
//import gsap, { CSSPlugin } from 'gsap';
//import ScrollTrigger from 'gsap/ScrollTrigger';
//import { Power3 } from 'gsap/gsap-core';







const Home = () => {

  //let images = useRef(null);

 // let tl = gsap.timeline();
 // useEffect(() =>{
    
    //const africaImage = images.firstElementChild;
    //tl.from(africaImage, {duration: 1.2, y: 1200, ease: Power3.easeOut})
    //.from(africaImage.firstElementChild, {duration:2, scale: 1.5, ease: Power3.easeOut})
  //})
  return (
    <div  className="home">
      
         <div className='carousel'>
            <Carousel variant='dark'>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo}
                    alt="Clemmeridian Logo"
                            />
                  <Carousel.Caption>
                    <h3 >Clemmeridian Group</h3>
                    <h4>those who wish to engage in Africa </h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/businessman-using-a-computer-to-concept-of-fund-financial-investment-picture-id1360521209?b=1&k=20&m=1360521209&s=170667a&w=0&h=GcwijqRDOroH5-hQdZ--ksLgOjCMuq1kqZRP30kSZKA="
                    alt="2nd slide"
                            />
                  <Carousel.Caption>
                    <h3 >Clemmeridian Investment Ltd</h3>
                    <h4>Solution provider to those who wish to engage in Africa </h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://acute.com.cy/wp-content/uploads/2015/10/management-consulting.jpg"
                    alt="3rd slide"
                  />

                  <Carousel.Caption>
                    <h3 >Clemmeridian Consults </h3>
                    <h4>Tax and financial management consulting</h4></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iJfzW_j1m4GUG7JW7yuH2GDBere6vHRWVQ&usqp=CAU"
                    alt="4th slide"
                  />

                  <Carousel.Caption>
                    <h3>Clemmeridian Care Foundation </h3>
                    
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         </div>
        <div className="home-body">
          <h2 className='description'>Clemmeridian Group</h2>
          <div className='line'></div>
          <div className="home-description">

            <div className='intro'>
            <p>Clemmeridian Group is a consulting and business development agency with a pan-African focus. With over 30 years of shared shareholder's expertise, Clemmeridian Group takes pride in providing superior Consulting & Advisory Services, Investment, and Trade across Africa. Creating access and services for a class of potential investors by providing investment management and other financial services to intended investors and those looking to explore more about the African market. </p>
            </div>
            
            <div className='desc-left'>
              <img  src={africa} alt="africa" />
            </div>
            <div className='desc-right'>
               <p>As the decision to invest in Africa becomes more prevalent, we are here to assist you in uncovering economic opportunities that match your focus, assessing potential risks, and navigating through the roadblocks to your intended destination.</p>
              <p>In Clemmeridian we see Africa’s challenges as business opportunities. We are business enablers.</p>
            </div> 
          </div>

          <div className='home-vision'>
            <div>
              <h1>Our Vision</h1>
              <h5>To be a world leader at connecting investors around the globe to African business opportunities</h5>
            </div>
          </div>
          
          <div className="home-services">
            <div className="services-title">
              <h2>Our core services</h2>
            </div>
            <div className="box">
              <div className="home-service-card">
                <i class="fa-solid fa-user"></i>
                <h5>Consulting & Advisory Services</h5>
                <div className='pra'>
                  <p>We focus on tax and financial planning</p>
                  <Link className='button' to="/consult">Read more</Link>
                </div>
              </div>
              <div className="home-service-card">
                <i class="fa-solid fa-money-bill-trend-up"></i>
                <h5>Investment</h5>
                <div className='pra'>
                  <p>We focus on business development and research</p>
                  <Link className='button' to="/investment">Read more</Link>
                </div>
              </div> 
              <div className="home-service-card">
                <i class="fa-solid fa-scale-balanced"></i>
                <h5>Trade</h5>
                <div className='pra'>
                  <p>We focus on the importation and exportation of products within the African market and the rest of the world</p>
                  <Link className='button' to="/contact">Read more</Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Home