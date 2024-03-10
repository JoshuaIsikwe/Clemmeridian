import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaBalanceScale, FaUserAlt,FaMoneyBill} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"
//import ExampleCarouselImage from 'components/ExampleCarouselImage'



export default function Home() {
 
  const framerVariants ={
    hiddenX:{
      opacity:0,
      x:-100
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
   
    <div>
      <Head>
        <title>
          Clemmeridian
        </title>
        <meta name="description" content="Generated by create next app"></meta>
      </Head>

      
      <Carousel variant='dark'>
        <Carousel.Item>
        <motion.div initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}>
            <Image className='d-block w-100'  src='/images/logo.jpg' style={{maxWidth: '100%', maxHeight:'100vh'}} width='1000' height='650' alt='/Clemmeridian'/>
          </motion.div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='d-block w-100' src='/images/InvestSlide.jpg' style={{maxWidth: '100%', maxHeight:'100vh'}} width='1000' height='650' alt='/Clemmeridian Investment'/>

          <Carousel.Caption>
            <h3 className='text-base font-extrabold md:text-4xl text-red-500'>CLEMMERIDIAN INVESTMENT LTD</h3>
            <p className='text-sm md:text-2xl font-semibold text-black '>Solution provider to those who wish to engage in Africa</p>
          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        <Image className='d-block w-100' src='/images/consultSlide.jpg' style={{maxWidth: '100%',  maxHeight:'100vh'}} width='1000' height='650' alt='/Clemmeridian Consults'/>
          <Carousel.Caption>
            <h3 className='text-base font-bold md:text-4xl'>CLEMMERIDIAN CONSULT</h3>
            <p className='text-sm md:text-2xl font-semibold'>
              Tax and financial management consulting, business development and training
            </p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='d-block w-100' src='/images/FoundationSlide.jpg' style={{maxWidth: '100%', maxHeight:'100vh'}} width='1000' height='650' alt='/Clemmeridian Care Foundation'/>
          <Carousel.Caption>
            <h3 className='text-base font-bold md:text-4xl'>CLEMMERIDIAN CARE FOUNDATION</h3>
            <p className='text-sm md:text-2xl font-semibold'>
              Giving back to the society
            </p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        
      <main className='flex flex-col mt-24 md:mt-28 items-center'>
             <section className='home-description '>
                <motion.div variants={framerVariants} initial="hiddenY"
                   whileInView="visibleY" viewport={{ once: true }}>
                <div className='text-3xl text-red-500 text-center'>
                  <h1>CLEMMERIDIAN GROUP</h1>
                  <div className='line'></div>
                </div>
              </motion.div>
            
            <div className='text-xl text-left my-20 pb-20'>
              <p className='w-10/12 m-auto text-justify'>
              Clemmeridian Group is a group of entities with pan-African focus. These entities are Clemmeridian Investment Ltd, Clemmeridian Consults and Clemmeridian Care Foundation. With over 30 years of shared expertise among the shareholders, Clemmeridian Group takes pride in providing superior services to its clients and stakeholders. 
              </p>
            </div>
            
            <div className='desc flex flex-wrap h-auto items-center '>
              <motion.div whileHover={{ scale: 1.1}} initial={{ opacity: 0 }} whileInView={{opacity:1}} transition={{duration:2,delay:1}} viewport={{ once: true }}
               className='desc-left rounded-full w-full lg:w-1/2 text-center'>
                
                <Image src='/images/Africa.png' width='600' height='600' alt='/'></Image>
              </motion.div>
              <div className='desc-right rounded-3xl w-4/5 m-auto py-10 text-lg text-justify p-3 md:p-12 italic bg-red-50 lg:w-1/2 '>
                <motion.p initial={{ opacity: 0, x:-100 }}
                   whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                   transition={{duration:1.5, type:"tween"}} className='one lg:w-4/5 text-red-500 text-xl'>In Clemmeridian we see Africa’s challenges as business opportunities. We are business enablers.</motion.p>
                <motion.p variants={framerVariants} initial="hiddenX" whileInView="visibleX" viewport={{ once: true }}
                   transition={{duration:1, type:"tween"}}className='two lg:w-4/5'>As the decision to invest in Africa becomes more prevalent, we are here to assist you in uncovering economic opportunities that match your focus, assessing potential risks, and navigating through the roadblocks to your intended destination.</motion.p>
                </div> 
            </div>
          </section>

          <motion.section initial={{opacity:0}} whileInView={{opacity:1,}} transition={{delay:1}} viewport={{ once: true }}
           className='home-vision h-56 mt-32 bg-red-500 w-full flex flex-col items-center mb-20'>
            
              <h2 className='text-5xl font-bold text-white my-6'>Our Vision</h2>
              <h5 className='text-lg text-center  md:w-4/5 md:text-xl'>To be a world leader at connecting investors around the globe to African business opportunities</h5>
  
          </motion.section>
          
          <section className='home-services flex flex-col items-center'>
            <div className='services-title m-8'>
              <h2 className='font-bold text-5xl text-center'>Our Subsidiary Services</h2>
            </div>
            <motion.div initial={{ opacity: 0, y:-100 }}
                   whileInView={{ opacity: 1, y: 10 }}
                   transition={{duration:1, type:"tween", delay:0.5}} viewport={{ once: true }}
                   className='box flex flex-wrap justify-evenly'>
              <div className='rounded-3xl shadow-xl shadow-gray-400 relative flex flex-col p-8 items-center text-center h-96 w-3/4 mx-auto mt-10 md:w-2/3 lg:w-1/4'>
                <FaUserAlt className=' text-5xl text-gray-700 hover:scale-110 hover:text-blue-500'/>
                <h5 className='text-2xl font-bold mb-2'>Consulting & Advisory Services</h5>
                <div className='pra '>
                  <p>We focus on tax and financial planning</p>
                  <Link href='/Consult'>
                    <li className='button font-bold transition-colors border outline-none border-solid bg-red-500 rounded-3xl  cursor-pointer list-none absolute w-2/4 p-2 left-0 right-0 mx-auto self-center bottom-1/4 hover:bg-transparent font hover:text-red-500 hover:scale-105'>Read more</li>
                  </Link>
                </div>
              </div>
              <div className='rounded-3xl shadow-xl shadow-gray-400 relative flex flex-col p-8 items-center text-center h-96 w-3/4 mx-auto mt-10 md:w-2/3  lg:w-1/4'>
                <FaMoneyBill className=' text-5xl text-gray-700 hover:scale-110  hover:text-blue-500'/>
                <h5 className='text-2xl font-bold mb-2'>Investment Solutions</h5>
                <div className='pra '>
                  <p>We focus on business development and research</p>
                  <Link href='/Services'>
                    <li className='button font-bold transition-colors border outline-none border-solid bg-red-500 rounded-3xl  cursor-pointer list-none absolute w-2/4 p-2 left-0 right-0 mx-auto self-center bottom-1/4 hover:bg-transparent font hover:text-red-500 hover:scale-105'>Read more</li>
                  </Link>
                </div>
              </div> 
              <div className='rounded-3xl shadow-xl shadow-gray-400 relative flex flex-col p-8 items-center text-center h-96 w-3/4 mx-auto mt-10 md:w-2/3 lg:w-1/4'>
                <FaBalanceScale className=' text-5xl text-gray-700 hover:scale-110  hover:text-blue-500'/>
                <h5 className='text-2xl font-bold mb-2'>Trade</h5>
                <div className=''>
                  <p>We focus on the importation and exportation of products within the African market and the rest of the world</p>
                  <Link href='/'>
                    <li className='button  font-bold transition-colors border outline-none border-solid bg-red-500 rounded-3xl  cursor-pointer list-none absolute w-2/4 p-2 left-0 right-0 mx-auto self-center bottom-1/4 hover:bg-transparent font hover:text-red-500 hover:scale-105'>Read more</li>
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
         </main>
    </div>
  )
}