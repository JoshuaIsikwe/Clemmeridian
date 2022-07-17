import React from 'react'
import "./style.css"
import together from  "../images/together.jpg"

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
          <p>Africa is a Continent of great hope and opportunities. Unfortunately, most of these business opportunities in different African Countries are unknown to African and Africa focused Investors. Our job is to identify these opportunities, locate the Investors, navigate through the challenges, and deliver investment solution. We are able to achieve this through our strong relationship with different African Governments and also our knowledge of Africa economy.</p>
          <p>In Clemmeridian, we see Africa challenges as business opportunities. We are business enablers. We have built strong strategic alliances with major Africa based business and economic analysts operating in different African countries thereby making us able to surpass our clients’ expectations. </p>
          <p className='p-bold'>We create and multiply wealth in Africa! Would you not rather work with us?</p>
      </div>

        <div className="about-services">
          <div className="about-card">
              <h2>Vision</h2>
              <div className='line'></div>
              <p>To be a world leader at connecting investors to Africa business opportunities</p>
          </div>
          <div className="about-card">
            <h2>Mission</h2>
            <div className='line'></div>
            <p>To identify business opportunities in Africa for our clients, and navigate through the challenges, to create and multiply wealth for our stakeholders</p>
          </div>
        </div>
        <div className="values">
            <h2>Values</h2>
            <div className='line'></div>
            <p className='values-intro'>Our core values define who we are and how we treat our clients. These values shaped our character and are represented by the acronym PIPIR.</p>

            <div className='values-section'>
              <div className="value-row">
                <div className='value-item'>
                    <i class="fa-solid fa-circle-notch"></i><div className='value-item-text'><h2>Professionalism</h2><p>Our skill is guaranteed for you.</p></div>
                </div>
                <div className='value-item'>
                    <i class="fa-solid fa-circle-notch"></i><div className='value-item-text'><h2>Integrity</h2><p>We are courageous to do what is right.</p></div>
                </div>
                <div className='value-item'>
                    <i class="fa-solid fa-circle-notch"></i><div className='value-item-text'><h2>Proactivity</h2><p>We identify and deal with challenges upfront.</p></div>
                </div>
              </div>

              <div className="value-row">
                <div className='value-item'>
                    <i class="fa-solid fa-circle-notch"></i><div className='value-item-text'><h2>Innovation</h2><p>We are creative in our approach to things.</p></div>
                </div>
                <div className='value-item'>
                    <i class="fa-solid fa-circle-notch"></i><div className='value-item-text'><h2>Responsiveness</h2><p>Your needs are promptly met.</p></div>
                </div>
              </div>
            </div>
            <div className='line'></div>
        </div>

        <div className="company-structure">
          <h1>Company Structure</h1>
          <div className="structure-2">
              <h5>Clemmeridian Group is a group of entities with pan-African focus. These entities are Clemmeridian Investment Ltd, Clemmeridian Consults and Clemmeridian Care Foundation. With over 30 years of shared shareholder's expertise, Clemmeridian Group takes pride in providing superior services to its clients and stakeholders. </h5>
          </div>
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
            <div className='seperator'></div>
            <div className="structure-3">
              <div className='structure-left'><h2>Clemmeridian Care Foundation</h2></div>
              <div className='structure-right'><p> Clemmeridian Group has a social burden to give back to the society and this need birthed Clemmeridian Care Foundation. Through the foundation we aim to render humanitarian services in the society, with the focus being orphans and single mothers.</p>
                  </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About