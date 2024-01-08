import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import {AiOutlineAim, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { motion } from "framer-motion"


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRes, setIsOpenRes] = useState(false);
  
  useEffect (()=>{
    setIsOpen(false)
  }, [])
  return (
    <div className='sticky w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center  w-full h-full px-2 2xl:px-16'>
            <motion.div whileHover={{scale:1.1, boxShadow: "0px 0px 8px rgb(255 255 255)"}}>
              <Link href='/' className='no-underline'>
                <h2 className='font-bold text-xl cursor-pointer ml-5 text-blue-600 ease-in hover:text-red-600 tracking-wider'>CLEMMERIDIAN</h2>
              </Link>            
            </motion.div>
          <div>
              <ul className='hidden md:flex  mr-6'>
                <Link href='/' className='no-underline'>
                  <li className='ml-10 text-sm uppercase ease-in px-3 hover:font-semibold hover:border-b hover:scale-105 '>Home</li>
                </Link>
               <div className=''>
                <Link href='' className='no-underline hover:border-b hover:scale-105' onClick={() => setIsOpen((prev)=> !prev)} >
                    <li className='ml-10 relative flex items-center gap-1 text-sm uppercase ease-in px-2 text-center cursor-pointer hover:font-semibold before:'>Our Company {!isOpen ?(<AiOutlineCaretDown/>):
                   (<AiOutlineCaretUp/>) }</li>
                </Link>
                {isOpen && (
                  <div className='ml-4 gap-2 rounded border-gray-400 absolute right-auto w-40 flex flex-col bg-blue-100 shadow-sm p-2 top-12'>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white border-b' href='/About'>About Us</Link>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Investment'>Investment Solutions</Link>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Consult' >Consults</Link>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Foundation'>Foundation</Link>
                  {/*<Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Team'>The Team</Link>*/}
                </div>)
                }
                  
               </div>
                <Link href='/Services' className='no-underline'>
                  <li className='ml-10 text-sm uppercase ease-in px-2 hover:font-semibold hover:border-b hover:scale-105 '>Services</li>
                </Link>
                <Link href='/Contact' className='no-underline'>
                  <li className='ml-10 text-sm uppercase ease-in px-2 hover:font-semibold hover:border-b hover:scale-105 '>Contact</li>
                </Link>
              </ul>
              <div onClick={handleNav} className='md:hidden mr-6 cursor-pointer'>
                <AiOutlineMenu size={25}/>
              </div>
          </div>
        </div>
        <section className={nav?'md:hidden fixed z-10 left-0 top-0 w-full h-screen bg-black/70': '' }>
          <div className={nav? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                  <Image src='/images/logo.png' width='140' height='90' alt='/'></Image>
                  <div onClick={handleNav}  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose size={25}/>
                  </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link className='no-underline' href='/'>
                  <li className='py-4 text-sm'>Home</li>
                </Link>
                <div>
                  <Link className='no-underline' href='/About' onClick={() => setIsOpenRes((prev)=> !prev)}>
                    <li className='py-2 text-sm flex items-center relative'>Our Company{!isOpenRes ?(<AiOutlineCaretDown/>):
                   (<AiOutlineCaretUp/>) }</li>
                  </Link>
                  {isOpenRes && (
                  <div className='ml-4 gap-2 rounded border-gray-400 absolute right-auto w-2/3 flex flex-col bg-blue-100 shadow-sm p-2 '>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white border-b' href='/About'>About Us</Link>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Investment'>Investment Solutions</Link>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Consult' >Consults</Link>
                  <Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Foundation'>Foundation</Link>
                  {/*<Link className='no-underline cursor-pointer px-2 rounded hover:bg-white' href='/Team'>The Team</Link>*/}
                </div>)
                }
                </div>
                <Link className='no-underline' href='/Services'>
                  <li className='py-4 text-sm'>Services</li>
                </Link>
                <Link className='no-underline' href='/Contact'>
                  <li className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Navbar