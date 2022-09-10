import Image from 'next/image'
import React from 'react'
import { FaBullseye, FaCircleNotch, FaEye } from 'react-icons/fa'
import { motion } from "framer-motion"

const About = () => {
  const framerVariants ={
    hiddenX:{
      opacity:0,
      x:100
    },
    visibleX:{
      opacity: 1,
      x:0,
      transition:{
        duration:1,
        type:"tween"
      }
    },
    hiddenY:{
      opacity:0,
      y:-100
    },
    visibleY:{
      opacity: 1,
      y:0,
      transition:{
        duration:1,
        type:"tween"
      }
    }
  }
  return ( 
    <div className='about w-full text-center justify-center'>
         <div className='page-title text-center text-4xl m-24'>
            <h1>OUR COMPANY</h1>
            <div className='line'></div>
        </div>
      <div className='about-container'>
        <div className='about-us w-full m-auto justify-items-center'>
          <Image src='/images/together.jpg'  width='1000' height='500' alt='/' layout=''></Image>
          <div className='m-14 text-left'>
            <p>Africa is a Continent of great hope and opportunities. Unfortunately, most of these business opportunities in different African Countries are unknown to African and Africa focused Investors. Our job is to identify these opportunities, locate the Investors, navigate through the challenges, and deliver investment solution. We are able to achieve this through our strong relationship with different African Governments and also our knowledge of Africa economy.</p>
            <p className='mt-4'>In Clemmeridian, we see Africa challenges as business opportunities. We are business enablers. We have built strong strategic alliances with major Africa based business and economic analysts operating in different African countries thereby making us able to surpass our clients’ expectations. </p>
            <motion.p variants={framerVariants} initial="hiddenX" whileInView="visibleX" className='font-bold text-center text-red-500 m-2'>We create and multiply wealth in Africa! Would you not rather work with us?</motion.p>
          </div>
        </div>

        <div className='about-services flex justify-center items-center py-10 bg-red-50'>
         <div className='w-4/5 flex flex-col lg:flex-row'>
            <div className='about-card  bg-white rounded-3xl p-10 m-3 text-center flex-1 '>
                  <motion.i initial={{opacity:0, scale: 0.1}} whileInView={{opacity:1, scale:2}} transition={{duration:2}}><FaEye className='mx-auto my-5 text-4xl text-blue-500'/></motion.i>
                  <h2 className='text-3xl text-blue-500'>Vision</h2>
                  <div className='line'></div>
                  <motion.p variants={framerVariants} initial="hiddenY" whileInView="visibleY" viewport={{ once: true }} className='mt-8'>To be a world leader at connecting investors to Africa business opportunities</motion.p>
              </div>
              <div className='about-card bg-white rounded-3xl p-10 m-3 text-center flex-1'>
                <motion.i initial={{opacity:0, scale: 0.1}} whileInView={{opacity:1, scale:2}} transition={{duration:2}}><FaBullseye className='mx-auto my-5 text-4xl text-blue-500'/></motion.i>
                <h2 className='text-3xl text-blue-500'>Mission</h2>
                <div className='line'></div>
                <motion.p variants={framerVariants} initial="hiddenY" whileInView="visibleY" viewport={{ once: true }} className='mt-8'>To identify business opportunities in Africa for our clients, and navigate through the challenges, to create and multiply wealth for our stakeholders</motion.p>
            </div>
         </div>
        </div>
        <div className='values'>
            <h2 className='text-3xl text-blue-500 mt-6'>Values</h2>
            <div className='line mb-4'></div>
            <p className='values-intro'>Our core values define who we are and how we treat our clients. These values shaped our character and are represented by the acronym PIPIR.</p>

            <div className='values-section p-4 flex justify-center flex-wrap mb-5'>
              <div className='value-row'>
                <div className='value-item flex'>
                    <FaCircleNotch className='text-red-500 text-2xl mr-5'/><div className='value-item-text flex flex-col text-left'><h2 className='text-red-500 text-2xl'>Professionalism</h2><p>Our skill is guaranteed for you.</p></div>
                </div>
                <div className='value-item flex'>
                    <FaCircleNotch className='text-red-500 text-2xl mr-5'/><div className='value-item-text flex flex-col text-left'><h2 className='text-red-500 text-2xl'>Integrity</h2><p>We are courageous to do what is right.</p></div>
                </div>
                <div className='value-item flex'>
                    <FaCircleNotch className='text-red-500 text-2xl mr-5'/><div className='value-item-text flex flex-col text-left'><h2 className='text-red-500 text-2xl'>Proactivity</h2><p>We identify and deal with challenges upfront.</p></div>
                </div>
              </div>

              <div className='value-row'>
                <div className='value-item flex'>
                    <FaCircleNotch className='text-red-500 text-2xl mr-5'/><div className='value-item-text flex flex-col text-left'><h2 className='text-red-500 text-2xl'>Innovation</h2><p>We are creative in our approach to things.</p></div>
                </div>
                <div className='value-item flex'>
                    <FaCircleNotch className='text-red-500 text-2xl mr-5'/><div className='value-item-text flex flex-col text-left'><h2 className='text-red-500 text-2xl'>Responsiveness</h2><p>Your needs are promptly met.</p></div>
                </div>
              </div>
            </div>
            <div className='line'></div>
        </div>

        <div className='company-structure my-20 flex flex-col'>
          <h1 className='text-4xl text-blue-500'>COMPANY STRUCTURE</h1>
          <div className='structure-2 p-4 text-left lg:m-12 '>
              <h5>Clemmeridian Group is a group of entities with pan-African focus. These entities are Clemmeridian Investment Ltd, Clemmeridian Consults and Clemmeridian Care Foundation. With over 30 years of shared shareholders expertise, Clemmeridian Group takes pride in providing superior services to its clients and stakeholders. </h5>
          </div>
          <motion.div vat variants={framerVariants} initial="hiddenY" whileInView="visibleY" viewport={{ once: true }} className='structure-1 flex flex-col p-5  bg-red-50 lg:m-12 '>
            <div className='structure-left text-blue-600 text-3xl mb-5'><h2>CLEMMERIDIAN INVESTMENT</h2></div>
            <div className='structure-right text-justify self-center lg:w-8/12'><p>Clemmeridian Investment focuses on business development across Africa, identifying and arranging possibilities in a way that is beneficial to firms who operate in Africa and those that wish to engage in Africa but are unfamiliar with the African market.</p>
                  <p className='mt-2'> Clemmeridian&apos;s goal in completing due diligence on firms is to generate new business for the African market and function as an intermediary between possible investors and the African market. Doing business in Africa comes with its own set of challenges and methods. We can undertake a hand-carrying exercise to get you to your chosen location.</p>
                </div>
            </motion.div>
            
            <div className='seperator'></div>
            <motion.div  variants={framerVariants} initial="hiddenY" whileInView="visibleY" viewport={{ once: true }} className='structure-2  flex flex-col p-5  lg:m-12'>
              <div className='structure-left  text-blue-600 text-3xl mb-5'><h2>CLEMMERIDIAN CONSULT</h2></div>
              <div className='structure-right text-justify self-center lg:w-8/12'><p>Clemmeridian Consult specializes in tax and financial management consulting, as well as working with state Internal Revenue Services and tax authorities to identify strategies to expand the revenue base. Through strategies such as tax clinics, which are implemented within enterprises, Clemmeridian facilitates procedures to manage their tax and tax-related goals.</p>
                      <p className='mt-2'>We work with the state government to assist with the required tax draft as well as the proper implementation and execution of tax collection, with our team of tax specialists, professors, and high-profile lawyers. Let us collaborate to develop and implement business growth ideas that work in Africa. We willu assist you in overcoming obstacles on your way to your desired outcome.</p>
              </div>
            </motion.div>
            <div className='seperator'></div>
            <motion.div  variants={framerVariants} initial="hiddenY" whileInView="visibleY" viewport={{ once: true }} className='structure-3  flex flex-col p-5 bg-red-50 lg:m-12'>
              <div className='structure-left  text-blue-600 text-3xl mb-5'><h2>CLEMMERIDIAN CARE FOUNDATION</h2></div>
              <div className='structure-right text-justify self-center lg:w-8/12'><p > Clemmeridian Group has a social burden to give back to the society and this need birthed Clemmeridian Care Foundation. Through the foundation we aim to render humanitarian services in the society, with the focus being orphans and single mothers.</p>
                  </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About