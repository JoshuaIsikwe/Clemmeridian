import React from 'react'
import "./style.css"
import together from  "../images/teamwork-puzzle.jpg"

const About = () => {
  return (
    <div className='about'>
         <div className="page-title">
            <h1>Our Company</h1>
            <div className='line'></div>
        </div>
      <div className="about-container">
        <div className="about-us">
          <img src={together} alt="" />
          <p>Africa is a land rich in prospects, but the challenge for investors is identifying those opportunities and turning them into substantial profit. *Our mission* is to find these opportunities, find investors, overcome obstacles, and provide investment solutions.</p>
          <p>Clemmeridian prides itself on being excellent business enablers, thus we are well-versed in the African economy. We have created solid strategic connections with several African governments as well as key Africa-based consulting and investment specialists working in various nations during the course of our business, allowing us to exceed our clients' expectations. In Africa, we generate and multiply wealth!</p>
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
              <li>Professionalism - our skill is guaranteed for you</li>
              <li>Integrity - we are courageous to do what is right</li>
              <li>Proactivity - we identify and deal with challenges upfront.</li>
              <li>Innovation - we are creative in our approach to things.</li>
              <li>Responsiveness - Your needs are promptly met.</li>
            </ul>
            <div className='line'></div>
        </div>

        <div className="company-structure">
          <h1>Company Structure</h1>
          <div className="structure-1">
            <div className='structure-left'><h2>Clemmeridian Investment</h2></div>
            <div className='structure-right'><p>Clemmeridian Investment focuses on business development across Africa, identifying and arranging possibilities in a way that is beneficial to firms who operate in Africa and those that wish to engage in Africa but are unfamiliar with the African market. Clemmeridian's goal in completing due diligence on firms is to generate new business for the African market and function as an intermediary between possible investors and the African market. Doing business in Africa comes with its own set of challenges and methods. We can undertake a hand-carrying exercise to get you to your chosen location.</p>
                </div>
            </div>
            
            <div className='seperator'></div>
            <div className="structure-2">
              <div className='structure-left'><h2>Clemmeridian Consult</h2></div>
              <div className='structure-right'><p>Clemmeridian Consult specializes in tax and financial management consulting, as well as working with state Internal Revenue Services and tax authorities to identify strategies to expand the revenue base. Through strategies such as tax clinics, which are implemented within enterprises, Clemmeridian facilitates procedures to manage their tax and tax-related goals. We work with the state government to assist with the required tax draft as well as the proper implementation and execution of tax collection, with our team of tax specialists, professors, and high-profile lawyers. Let's collaborate to develop and implement business growth ideas that work in Africa. We'll assist you in overcoming obstacles on your way to your desired outcome.</p>
                  </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About