import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaBalanceScale, FaUserAlt,FaMoneyBill} from "react-icons/fa";
import Footer from "../components/Footer";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import gsap from "gsap";



export default function Home() {

  // useEffect(() => {
    
  //   gsap.from(".carousel", {
  //     opacity: 0, 
  //     y: 100, 
  //     duration: 1
  //   });
  // },[])

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
        <Image className='d-block w-100' src='/images/logo.jpg' width='1600' height='650' alt='/Clemmeridian'></Image>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className='d-block w-100' src='/images/InvestSlide.jpg' width='1600' height='650' alt='/Clemmeridian Investment'></Image>

        <Carousel.Caption>
          <h3 className='text-base font-bold md:text-4xl text-black'>CLEMMERIDIAN INVESTMENT Ltd</h3>
          <p className='text-sm md:text-2xl text-black font-bold'>Solution provider to those who wish to engage in Africa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className='d-block w-100' src='/images/consultSlide.jpg' width='1600' height='650' alt='/Clemmeridian Consult'></Image>
        <Carousel.Caption>
          <h3 className='text-base font-bold md:text-4xl'>CLEMMERIDIAN CONSULT</h3>
          <p className='text-sm md:text-2xl'>
            Tax and financial management consulting, business development and training
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className='d-block w-100' src='/images/FoundationSlide.jpg' width='1600' height='650' alt='/Clemmeridian Care Foundation'></Image>
        <Carousel.Caption>
          <h3 className='text-base font-bold md:text-4xl'>CLEMMERIDIAN CARE FOUNDATION</h3>
          <p className='text-sm md:text-2xl'>
            Giving back to the society
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
      <main className='flex flex-col mt-12 items-center'>
             <section className='home-description '>

                <div className='text-3xl text-red-500 text-center'>
                  <h1 className='intro'>CLEMMERIDIAN GROUP</h1>
                  <div className='line'></div>
                </div>
                

            <div className='text-xl text-left my-10 pb-20'>
              <p className='w-10/12 m-auto'>
              Clemmeridian Group is a group of entities with pan-African focus. These entities are Clemmeridian Investment Ltd, Clemmeridian Consults and Clemmeridian Care Foundation. With over 30 years of shared expertise among the shareholders, Clemmeridian Group takes pride in providing superior services to its clients and stakeholders. 
              </p>
            </div>
            
            <div className='desc flex flex-wrap h-auto items-center bg-red-50'>
              <div className='desc-left w-full lg:w-1/2 text-center bg-white'>
                
                <Image src='/images/Africa.png' width='600' height='600' alt='/'></Image>
              </div>
              <div className='desc-right w-4/5 m-auto py-10 text-lg text-justify md:p-8 italic lg:w-1/2 '>
                <p className='one lg:w-4/5 text-red-500 text-2xl'>In Clemmeridian we see Africa’s challenges as business opportunities. We are business enablers.</p>
                <p className='two lg:w-4/5'>As the decision to invest in Africa becomes more prevalent, we are here to assist you in uncovering economic opportunities that match your focus, assessing potential risks, and navigating through the roadblocks to your intended destination.</p>
                </div> 
            </div>
          </section>

          <section className='home-vision h-56 mt-32 bg-red-500 w-full flex flex-col items-center mb-20'>
            
              <h2 className='text-5xl font-bold text-white my-6'>Our Vision</h2>
              <h5 className='text-lg text-center  md:w-4/5 md:text-xl'>To be a world leader at connecting investors around the globe to African business opportunities</h5>
  
          </section>
          
          <section className='home-services flex flex-col items-center'>
            <div className='services-title m-8'>
              <h2 className='font-bold text-5xl text-center'>Our Subsidiary Services</h2>
            </div>
            <div className='box flex flex-wrap justify-evenly'>
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
                <h5 className='text-2xl font-bold mb-2'>Investment</h5>
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
            </div>
          </section>
         </main>
    </div>
  )
}