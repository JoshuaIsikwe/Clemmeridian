
import React, { useEffect} from 'react'
import africa from "../images/Africa.png"
import logo from "../images/logo.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Power3 } from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';




gsap.registerPlugin(ScrollTrigger)


const Home = () => {
  
  
 
  useEffect(()=>{
    var t1= gsap.timeline({delay:2})
    t1.from('.logo',{y:-30, stagger:0.5 , ease:Power3.easeOut, opacity:0}, 0.15, 'Start')
    t1.from('.carousel',{y: 100, opacity:0, ease:Power3.easeOut, delay:0.2}, 'Start')
    
      const boxes = gsap.utils.toArray('.description, .desc-left');
        boxes.forEach(box => {
          gsap.from(box, { 
            y: -100, opacity:0, ease:Power3.easeOut,delay:0.2,
            scrollTrigger: {
              trigger: box,
              toggleActions: 'restart none none none',
              scrub: true
            }
          })
      })
    gsap.from('.intro',{x: -30, opacity:0, ease:Power3.easeOut, delay:1, duration:3,
      scrollTrigger:{
        trigger:'.intro',
        toggleActions: 'restart none none none',
      },
    }, 'Start')
    gsap.from('.desc-right p',{x: -30, opacity:0, ease:Power3.easeOut, delay:1,stagger:0.5,
      scrollTrigger:{
        trigger:'.desc-right p',
        toggleActions: 'restart none none none',
      },
    }, 'Start')
    gsap.from('.home-service-card',{y: -50, opacity:0, ease:Power3.easeOut, delay:1,stagger:0.5,
      scrollTrigger:{
        trigger:'.home-service-card',
        toggleActions: 'restart none none none',
      },
    }, 'Start')
  })
  //.from(".home", {duration:2,opacity:0})
  //.from(".intro p", {opacity:0, scale:0,ease:"back"})
  //.from(".desc-left img", {y:160,stagger:0.1,duration:0.8, ease:"back"})
  return (

    <div  className="home">
       
         <section className='carousel'>
            <Carousel variant='dark'>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo}
                    alt="Clemmeridian Logo"
                            />
                  <Carousel.Caption>
                    <h2 >Clemmeridian Group</h2>
                    <h4>Those who wish to engage in Africa </h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/businessman-using-a-computer-to-concept-of-fund-financial-investment-picture-id1360521209?b=1&k=20&m=1360521209&s=170667a&w=0&h=GcwijqRDOroH5-hQdZ--ksLgOjCMuq1kqZRP30kSZKA="
                    alt="2nd slide"
                            />
                  <Carousel.Caption>
                    <h2 >Clemmeridian Investment Ltd </h2>
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
                    <h2 >Clemmeridian Consults </h2>
                    <h4>Tax and financial management consulting, business development and training</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iJfzW_j1m4GUG7JW7yuH2GDBere6vHRWVQ&usqp=CAU"
                    alt="4th slide"
                  />

                  <Carousel.Caption>
                    <h2>Clemmeridian Care Foundation </h2>
                    <h4>Giving back to the society</h4>
                    
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         </section>

         <div className="home-body">
             <section className="home-description">

          <div className="home-title">
            <h2 className='description' >Clemmeridian Group</h2>
          </div>
          <div className='line'></div>

            <div className='intro'>
              <p>
              Clemmeridian Group is a group of entities with pan-African focus. These entities are Clemmeridian Investment Ltd, Clemmeridian Consults and Clemmeridian Care Foundation. With over 30 years of shared shareholder's expertise, Clemmeridian Group takes pride in providing superior services to its clients and stakeholders. 
              </p>
            </div>
            
            <div className="desc">
              <div className='desc-left'>
                
                <img src={africa} alt="africa" />
              </div>
              <div className='desc-right'>
                <p className='one'>In Clemmeridian we see Africa???s challenges as business opportunities. We are business enablers.</p>
                <p className='two'>As the decision to invest in Africa becomes more prevalent, we are here to assist you in uncovering economic opportunities that match your focus, assessing potential risks, and navigating through the roadblocks to your intended destination.</p>
                </div> 
            </div>
          </section>

          <section className='home-vision'>
            <div>
              <h1>Our Vision</h1>
              <h5>To be a world leader at connecting investors around the globe to African business opportunities</h5>
            </div>
          </section>
          
          <section className="home-services">
            <div className="services-title">
              <h2>Our Subsidiary services</h2>
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
                  <Link className='button' to="/services">Read more</Link>
                </div>
              </div>
            </div>
          </section>
         </div>
    </div>
  )
}

export default Home