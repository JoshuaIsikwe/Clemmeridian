import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='mt-48 bottom-0 top-0 left-0 right-0 bg-zinc-900 h-auto w-full font-serif pt-10 text-slate-100'>
        <div className=" flex flex-col items-center justify-center text-center ">
            <h3 className=' text-lg text-blue-500'>Clemmeridian Group</h3>
            <p className='text-white'>Those who choose to engage in Africa</p>
            <ul className='flex item-c'>
              <li>
                <a className='hover:text-cyan-300 hover:scale-110 text-2xl p-10' href="">
                  <FaFacebook/>
                </a>
              </li>
              <li>
                <a className='hover:text-cyan-300 hover:scale-110 text-2xl p-10'href="">
                  <FaLinkedin/>
                </a>
              </li>
            </ul>
        </div>
        <div className="footer-bottom bg-black p-5 text-center">
          <p className='capitalize text-sm leading-none spacing tracking-widest'>Copyright &copy;2022 Clemmeridian Group. Designed by <span className='font-extralight opacity-40'>UNDERSCORE_</span></p>
        </div>
    </div>
  )
}

export default Footer