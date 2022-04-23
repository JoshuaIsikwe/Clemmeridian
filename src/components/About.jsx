import React from 'react'
import "./style.css"

const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <h3>About us</h3>
        <div className='line'></div>
        <div className="about-us">
          <img src="" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem cum eum. Numquam error sequi, debitis vitae laudantium tenetur, reprehenderit quibusdam voluptate molestiae maiores dolorem voluptas accusamus! Perspiciatis iure, totam impedit dignissimos reprehenderit molestiae recusandae voluptas neque similique qui enim corporis odio unde molestias non vel at facere nesciunt cupiditate.</p>
        </div>

        <div className="about-services">
          <div className="about-card">
              <h3>Vision</h3>
              <div className='line'></div>
              <p>To be a world leader at connecting investors to Africa business opportunities</p>
          </div>
          <div className="about-card">
            <h3>Mission</h3>
            <div className='line'></div>
            <p>To identify business opportunities in Africa for our clients, and navigate through the challenges, to create and multiply wealth for our stakeholders</p>
          </div>
        </div>
        <div className="values">
            <h3>Values</h3>
            <div className='line'></div>
            <p>Our core values define who we are and how we treat our clients. These values shaped our character and are represented by the acronym PIPIR.</p>
            <ul>
              <li>Professionalism…. our skill is guaranteed for you</li>
              <li>-Integrity…. we are courageous to do what is right</li>
              <li>-Proactivity …. we identify and deal with challenges upfront.</li>
              <li>-Innovation …. we are creative in our approach to things.</li>
              <li>-Responsiveness …. Your needs are promptly met.</li>
            </ul>
            <div className='line'></div>
        </div>
      </div>
    </div>
  )
}

export default About