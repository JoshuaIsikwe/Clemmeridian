import Image from 'next/image'
import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'

const Consult = () => {
  return (
    <div>
    <div className='header relative w-full text-center mb-16'>
        <Image src='/images/Consult1.jpg' style={{ maxHeight:'80vh'}} width='1560' height='500' priority alt='/Financial Consulting'></Image>
      <div className='division-title absolute uppercase font-bold text-justify bottom-1/3 left-4 text-xl md:text-4xl lg:text-6xl'>Clemmeridian Consults</div>
      <div className='division-line absolute w-5/6 bottom-1/4 left-4 h-2 bg-gradient-to-r from-red-500 to-blue-600'></div>
    </div>
    <div className='foundation-body'>
        <div>
            
            <div className='line-1'></div>
          
            <div className='section-1 flex flex-col items-center'>
              <div className='left-section flex-1 w-5/6 md:w-4/6' >
              <p className='font-semibold  text-red-500 text-center'>Strategic consulting & advisory services, business development and training</p>
              
                <h5>Clemmeridian Consults is a subsidiary of the group and specializes in tax and financial management consulting, business development and training.</h5>
                <p>Provides strategic advisory services to State Internal Revenue Services and tax authorities on tax revenue growth.
                The services rendered by Clemmeridian Consults, being a tax and financial advisory entity include: 
                </p>
            <ul className='list-disc my-5'>
              <li className='my-3'>Provision of tax management consultancy services to public and private organisations. </li>
              <li className='my-3'>Develops strategies for the government on how to expand tax revenue base.</li>
              <li className='my-3'>Drafting of tax laws for the government tax agencies.</li>
              <li className='my-3'>Provision of Tax clinics for public and private sector entities.</li>
              <li className='my-3'>Provision of training services on different areas to public and private sector entities.</li>
              <li className='my-3'>Sourcing and structuring of finance for public and private sector entities.</li>
              <li className='my-3'>Sourcing and management of human resources for private sector entities.</li>
              <li className='my-3'>Conducting due diligence for entities.</li>
              <li className='my-3'>Provision of corporate messenger services for entities.</li>
            </ul>

              </div>
              <FaChalkboardTeacher className='text-9xl text-red-500'/>
              
            </div>
        </div>
    </div>
</div>
  )
}

export default Consult