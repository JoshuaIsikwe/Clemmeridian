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
        
        <div className="service-board">
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

        <div className="service-section">
          <div className="service-item">
            <h5>
              Identification and development of investment and business opportunities in Africa
            </h5>
            <p>
            Investors are in search of new markets and opportunities. Almost all markets except Africa are crowded up. Consequently, the remaining great frontier is Africa as every challenge there presents a great business opportunity!
            </p>
            <p>
            We identify these opportunities and structure them into profitable projects for relevant entities, to the benefit of all stakeholders. These include:
            </p>
          </div>
          <div className="service-item">
            <h5>
              Sourcing of mineral and agricultural products from African countries.
            </h5>
            <p>
            We source major credible suppliers of mineral and agricultural products from any African country as may be desired by foreign or African buyers. We are able to achieve this because of our wide network in these countries.
            </p>
          </div>
          <div className="service-item">
            <h5>
              Securing necessary regulatory or government approvals for African operations. 
            </h5>
            <p>
            With the right strategy, Africa presents you a high return on investment. Its population of over 1.2 billion people presents great opportunities for investment.
            </p>
            <p>
            However, the challenge for most entities is the ability to identify the right business opportunity and secure the necessary approvals for take-off. It is even more challenging for those who do not fully understand the African market.
            </p>
            <p>
              We are therefore here to meet these needs!
            </p>
          </div>
          <div className="service-item">
            <h5>
              Market Scanning
            </h5>
            <p>
              Lacking in most sub-Saharan African countries are roads, rails, ports, airports, electricity supply and IT infrastructure. This has hindered growth of regional business.
            </p>
            <p>
              We scan the market to provide the best opportunities that guarantee the highest rate of return to the investors.
           </p>
          </div>
          <div className="service-item">
            <h5>
              African business expansion.
            </h5>
            <p>
            We support entities for their African business expansion programs. This service is available to both existing businesses and new entrants.
            </p>
          </div>
          <div className="service-item">
            <h5>
              Business advisory mentorship services.
            </h5>
            <p>
            We provide and execute business takeoff and growth strategies that work in Africa. We help entities navigate through the Africa peculiar challenges to achieve the desired goals.
            </p>
          </div>
          <div className="service-item">
            <h5>    
              Connecting Investors and Entrepreneurs to Unique Business Opportunities across Africa.
            </h5>
            <p>
              We connect entities to desired business opportunity, necessary local authorities and preferred local partners if necessary.
            </p>
          </div>
          <div className="service-item">
            <h5>
              Preparation and Execution of Business Plans for different sectors.
            </h5>
            <p>
              We prepare business plans for projects within African countries. Our team of experts have diverse knowledge in different sectors of African economy. 
           </p>
          </div>
          <div className="service-item">
            <h5>
              Fund Sourcing
            </h5>
            <p>
            Availability of fund is a major challenge in Africa. We provide support to our clients in meeting this need. This could be done through the local banks or international financiers.
            </p>
          </div>
          <div className="service-item">
            <h5>
            Due Diligence and Valuation of Companies
            </h5>
            <p>
              Opportunities for business or companies’ sale arise from time to time in Africa. We help conduct the necessary due diligence and also business or company evaluation to enable you determine the best price for such investment.  
            </p>
          </div>
          <div className="service-item">
            <h5>
              Co-investing in identified opportunities
            </h5>
            <p>
            We do co-invest with clients in identified business opportunities. We use the provision of our African Specialized Skills as our equity contribution. This helps guarantee confidence for new investors in the country of their choice.  
            </p>
          </div>
          <div className="service-item">
            <h5>
              Educating global investors about doing business in Africa
            </h5>
            <p>
            Doing business in Africa has its challenges and techniques. We do hand carrying exercise for clients towards their desired destination.  
            </p>
          </div>
          <div className="service-item">
            <h5>
              Manpower Supply
            </h5>
            <p>
            Considering the dearth of skilled manpower is some African countries, we help source and manage skilled personnel in clients’ country of operation. We also guide clients in dealing with the countries’ labour law requirements. 
            </p>
          </div>
        </div>
        
        <div className="industries">
            <h4>Clemmeridian Group so far has been able to work in various industries including;</h4>                                  
            <div className="list">
              <div className='left-list'>
                <div className="list-item">
                <i class="fa-solid fa-wheat-awn"></i> <p>Agriculture </p>
                </div>
                <div className="list-item">
                <i class="fa-solid fa-solar-panel"></i> <p>Renewable Energy </p>
                </div>
                <div className="list-item">
                  <i class="fa-solid fa-certificate"></i> <p>Retail </p>
                </div>
                <div className="list-item">
                <i class="fa-solid fa-chart-line"></i> <p>Private Equity & Principal Investors </p>
                </div>
                <div className="list-item">
                <i class="fa-solid fa-house-chimney-window"></i> <p>Real Estate</p>
                </div>
              </div>
              <div className='right-list'>
                <div className="list-item">
                <i class="fa-solid fa-oil-well"></i> <p>Oil & Gas </p>
                </div>
                <div className="list-item">
                  <i class="fa-solid fa-coins"></i> <p>Financial Services</p>
                </div>
                <div className="list-item">
                <i class="fa-solid fa-truck"></i> <p>Transportation </p>
                </div>
                <div className="list-item">
                  <i class="fa-solid fa-certificate"></i> <p>Public and Social Sector </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services