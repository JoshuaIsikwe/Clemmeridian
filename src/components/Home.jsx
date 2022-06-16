
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import africa from "../images/Africa.png"
import logo from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer';


const Home = () => {
  const { ref: myRef, inView: elementVisibility } = useInView();

  return (
    <div className="home">
         <div className='carousel'>
         <Carousel variant='dark'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/businessman-using-a-computer-to-concept-of-fund-financial-investment-picture-id1360521209?b=1&k=20&m=1360521209&s=170667a&w=0&h=GcwijqRDOroH5-hQdZ--ksLgOjCMuq1kqZRP30kSZKA="
                alt="First slide"
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
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 >Clemmeridian Consults </h3>
                <h4>Tax and financial management consulting</h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iJfzW_j1m4GUG7JW7yuH2GDBere6vHRWVQ&usqp=CAU"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Clemmeridian Care Foundation </h3>
                
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
         </div>
        <div className="home-body">
          <div ref={myRef} className="home-description">
            <p>{elementVisibility? 'yes': 'no'}</p>
            <div className='desc-left'>
            <img src={africa} alt="africa" />
            </div>
            <div className='desc-right'>
              <h2>Clemmeridian Group</h2>
              
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
              <i class="fa-solid fa-money-bill-trend-up"></i>
                <h5>Investment</h5>
                <div className='pra'>
                  <p>We focus on business development and research</p>
                  <p><a className='button' href="" >Read more</a></p>
                </div>
              </div> 
              <div className="card">
                <i class="fa-solid fa-scale-balanced"></i>
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