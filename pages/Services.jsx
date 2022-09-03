import Image from 'next/image'
import React from 'react'
import { FaCertificate, FaCoins, FaTruckMoving } from 'react-icons/fa'
import { GiPayMoney, GiGreenPower, GiFarmTractor,GiOilDrum } from "react-icons/gi";
import { RiCommunityFill } from "react-icons/ri";


const Services = () => {
  return (
    <div>
      <div className='services'>
      <div className="page-title text-center text-4xl m-24">
            <h1>OUR SERVICES</h1>
            <div className='line'></div>
        </div>
        
        
       
       <section className='service-board hidden lg:flex w-full m-auto mb-20 bg-blue-600 md:max-w-5xl md:h-80v'>
          <div className='service-card flex flex-1 flex-col'>
            <div className=' h-60 md:h-2/4 bg-blue-600 flex text-xl items-center text-center justify-center ease-in duration-300 hover:bg-red-600 hover:scale-105'><h2 className='font-bold uppercase text-xl'>Investment</h2></div>
            <div className='services-box-icon h-2/4 bg-blue-600 flex items-center justify-center ease-in duration-300 hover:bg-red-600 hover:scale-105'>  <Image src='/../public/images/Investment.jpg'  width='341' height='240' alt='/'></Image></div>
          </div>
          <div className='service-card flex flex-1 flex-col'>
            <div className='services-box-icon h-2/4 bg-blue-600 flex items-center justify-center ease-in duration-300 hover:bg-red-600 hover:scale-105 '><Image src='/../public/images/consult.jpg'  width='341' height='240' alt='/'></Image></div>
            <div className=' h-60 md:h-2/4 bg-blue-600 flex items-center text-center justify-center ease-in duration-300 hover:bg-red-600 hover:scale-105'><h2 className='font-bold uppercase text-xl'>Consulting & Advisory Services</h2></div>
          </div>
          <div className='service-card flex flex-1 flex-col'>
            <div className='h-60 md:h-2/4 bg-blue-600 flex items-center text-center justify-center ease-in duration-300 hover:bg-red-600 hover:scale-105'><h2 className='font-bold uppercase text-xl'>Business Development & Training</h2></div>
            <div className='services-box-icon h-2/4 bg-blue-600 flex items-center justify-center ease-in duration-300 hover:bg-red-600 hover:scale-105 '><Image src='/../public/images/training.jpg'  width='341' height='240' alt='/'></Image></div>
          </div>
        </section>
        
        <section className='lg:hidden'>
          <Image src='/../public/images/servicesMobile.jpg' width='1024' height='600' alt='/'></Image>
        </section>

        
        <section className='industries flex flex-col items-center p-10'>
            <h4>Clemmeridian Group so far has been able to work in various sectors</h4>                                  
            <div className='list flex flex-wrap list-none '>
              <div className=' mr-10'>
                <div className=' flex mt-5 '>
                <GiFarmTractor className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Agriculture </p>
                </div>
                <div className=' flex mt-5'>
                <GiGreenPower className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Renewable Energy </p>
                </div>
                <div className=' flex mt-5'>
                  <FaCertificate className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Retail </p>
                </div>
                <div className=' flex mt-5'>
                <GiPayMoney className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Private Equity & Principal Investors </p>
                </div>
                <div className=' flex mt-5'>
                <RiCommunityFill className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Real Estate</p>
                </div>
              </div>
              <div className='right-list'>
                <div className=' flex mt-5 '>
                <GiOilDrum className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Oil & Gas </p>
                </div>
                <div className=' flex mt-5 '>
                  <FaCoins className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Financial Services</p>
                </div>
                <div className=' flex mt-5'>
                <FaTruckMoving className='text-3xl text-red-600 mr-6'/> <p className='text-lg font-bold'>Transportation </p>
                </div>
                <div className=' flex mt-5'>
                <FaCertificate className='text-3xl text-red-600 mr-6'/>  <p className='text-lg font-bold'>Public and Social Sector </p>
                </div>
              </div>
            </div>
        </section>

        <section className='service-section flex flex-col m-auto lg: w-4/5'>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold' >
              Identification and development of investment and business opportunities in Africa
            </h5>
            <p>
            Investors are in search of new markets and opportunities. Almost all markets except Africa are crowded up. Consequently, the remaining great frontier is Africa as every challenge there presents a great business opportunity!
            </p>
            <p>
            We identify these opportunities and structure them into profitable projects for relevant entities, to the benefit of all stakeholders. These include: Infrastructural opportunities and projects, Major bids/tenders for public and private sector supplies and others.
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Sourcing of mineral and agricultural products from African countries.
            </h5>
            <p>
            We source major credible suppliers of mineral and agricultural products from any African country as may be desired by foreign or African buyers. We are able to achieve this because of our wide network in these countries.
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Securing necessary regulatory or government approvals for African operations. 
            </h5>
            <p >
            With the right strategy, Africa presents you a high return on investment. Its population of over 1.2 billion people presents great opportunities for investment.
            </p>
            <p>
            However, the challenge for most entities is the ability to identify the right business opportunity and secure the necessary approvals for take-off. It is even more challenging for those who do not fully understand the African market.
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold '>
              Market Scanning
            </h5>
            <p>
              Lacking in most sub-Saharan African countries are roads, rails, ports, airports, electricity supply and IT infrastructure. This has hindered growth of regional business.
            </p>
            <p>
              We scan the market to provide the best opportunities that guarantee the highest rate of return to the investors.
           </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              African business expansion.
            </h5>
            <p>
            We support entities for their African business expansion programs. This service is available to both existing businesses and new entrants.
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Business advisory mentorship services.
            </h5>
            <p>
            We provide and execute business takeoff and growth strategies that work in Africa. We help entities navigate through the Africa peculiar challenges to achieve the desired goals.
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>    
              Connecting Investors and Entrepreneurs to Unique Business Opportunities across Africa.
            </h5>
            <p>
              We connect entities to desired business opportunity, necessary local authorities and preferred local partners if necessary.
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Preparation and Execution of Business Plans for different sectors.
            </h5>
            <p>
              We prepare business plans for projects within African countries. Our team of experts have diverse knowledge in different sectors of African economy. 
           </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Fund Sourcing
            </h5>
            <p>
            Availability of fund is a major challenge in Africa. We provide support to our clients in meeting this need. This could be done through the local banks or international financiers.
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
            Due Diligence and Valuation of Companies
            </h5>
            <p>
              Opportunities for business or companies’ sale arise from time to time in Africa. We help conduct the necessary due diligence and also business or company evaluation to enable you determine the best price for such investment.  
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Co-investing in identified opportunities
            </h5>
            <p>
            We do co-invest with clients in identified business opportunities. We use the provision of our African Specialized Skills as our equity contribution. This helps guarantee confidence for new investors in the country of their choice.  
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Educating global investors about doing business in Africa
            </h5>
            <p>
            Doing business in Africa has its challenges and techniques. We do hand carrying exercise for clients towards their desired destination.  
            </p>
          </div>
          <div className='service-item mb-5'>
            <h5 className=' text-blue-600 text-base uppercase font-bold'>
              Manpower Supply
            </h5>
            <p>
            Considering the dearth of skilled manpower is some African countries, we help source and manage skilled personnel in clients’ country of operation. We also guide clients in dealing with the countries’ labour law requirements. 
            </p>
          </div>
        </section>
        
    </div>
    </div>
  )
}

export default Services