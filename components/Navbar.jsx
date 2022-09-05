import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className='sticky w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center  w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
              <h2 className='font-bold text-xl cursor-pointer ml-5 text-blue-600 ease-in hover:text-red-600 tracking-wider hover:scale-105'>CLEMMERIDIAN</h2>
            </Link>
          <div>
              <ul className='hidden md:flex  mr-6'>
                <Link href='/'>
                  <li className='ml-10 text-sm uppercase ease-in border-blue-500 hover:font-semibold hover:border-b hover:scale-105 '>Home</li>
                </Link>
               <div className=''>
                <Link href='/About'>
                    <li className='ml-10 relative peer text-sm uppercase ease-in text-center border-blue-500 hover:font-semibold'>Our Company</li>
                </Link>
                  <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                      <Link href='/Investment'><li className="p-2 text-red-500 no-underline hover:bg-gray-200">INVESTMENT</li></Link>
                      <Link href='/Consult'><li className="p-2 text-red-500 no-underline hover:bg-gray-200">CONSULT</li></Link>
                      <Link href='/Foundation'><li className="p-2  text-red-500 no-underline hover:bg-gray-200" >FOUNDATION</li></Link>
                  </div>
               </div>
                <Link href='/Services'>
                  <li className='ml-10 text-sm uppercase ease-in border-blue-500 hover:font-semibold hover:border-b hover:scale-105 '>Services</li>
                </Link>
                <Link href='/Contact'>
                  <li className='ml-10 text-sm uppercase ease-in border-blue-500 hover:font-semibold hover:border-b hover:scale-105 '>Contact</li>
                </Link>
              </ul>
              <div onClick={handleNav} className='md:hidden mr-6 cursor-pointer'>
                <AiOutlineMenu size={25}/>
              </div>
          </div>
        </div>
        <section className={nav?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': '' }>
          <div className={nav? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                  <Image src='/images/logo.png' width='87' height='40' alt='/'></Image>
                  <div onClick={handleNav}  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose size={25}/>
                  </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                  <li className='py-4 text-sm'>Home</li>
                </Link>
                <div>
                  <Link href='/About'>
                    <li className='py-2 peer text-sm'>Our Company</li>
                  </Link>
                  <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                      <Link href='/Investment'><li className="p-2 text-red-500 no-underline hover:bg-gray-200">INVESTMENT</li></Link>
                      <Link href='/Consult'><li className="p-2 text-red-500 no-underline hover:bg-gray-200">CONSULT</li></Link>
                      <Link href='/Foundation'><li className="p-2  text-red-500 no-underline hover:bg-gray-200">FOUNDATION</li></Link>
                </div>
                </div>
                <Link href='/Services'>
                  <li className='py-4 text-sm'>Services</li>
                </Link>
                <Link href='/Contact'>
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