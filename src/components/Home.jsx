
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import africa from "../images/Africa.png"
import logo from "../images/logo.png"
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <img src={logo} alt="" />
        </div>
        <div className="home-body">
          <div className="home-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid fuga voluptas et ipsum deleniti odit accusantium. Hic consequuntur nam velit harum, commodi atque at labore sed ipsum iusto? Officiis, obcaecati dignissimos! Labore laborum eveniet soluta aliquid nostrum saepe excepturi ipsam quos, quam quo obcaecati non, sint error ducimus quidem.</p>
            <img src={africa} alt="africa" />
          </div>
          
          <div className="home-services">
            <div className="services-title">
              <h2>Our services</h2>
            </div>
            <div className="box">
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <h5>Web Development</h5>
                <div className='pra'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ipsam enim dolor at a.</p>
                  <p><a className='button' href="" >Read more</a></p>
                </div>
              </div>
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <h5>Web Development</h5>
                <div className='pra'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ipsam enim dolor at a.</p>
                  <p><a className='button' href="" >Read more</a></p>
                </div>
              </div>
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <h5>Web Development</h5>
                <div className='pra'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ipsam enim dolor at a.</p>
                  <p><a className='button' href="" >Read more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home