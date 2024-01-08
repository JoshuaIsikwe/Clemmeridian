import Image from 'next/image'
import React from 'react'
import { FaChartLine } from 'react-icons/fa'


const Investment = () => {

  return (
    <div>
    <div className="header relative w-full text-center mb-16">
        <Image className='w-full' src='/images/Investment1.jpg' style={{ maxHeight:'80vh'}}  width='1560' height='500' priority alt='/Business Investment Solutions'></Image>
      <div className="division-title absolute uppercase font-bold text-justify bottom-1/3 left-4 text-xl md:text-4xl lg:text-6xl">Clemmeridian Investment Ltd</div>
      <div className="division-line absolute w-5/6 bottom-1/4 left-4 h-2 bg-gradient-to-r from-red-500 to-blue-600"></div>
    </div>
    <div className="foundation-body">
        <div>
            
            <div className='line-1'></div>
         
            <div className='section-1 flex flex-col items-center mt-10'>
              <div className='left-section flex-1 w-5/6 md:w-4/6' >
              
              <p className='font-semibold  text-red-500'>Identification and development of investment and business opportunities in Africa</p>
              <p>
              Investors are in search of new markets and opportunities. Almost all markets except Africa are crowded up. Consequently, the remaining great frontier is Africa as every challenge there presents a great business opportunity!
              </p>
            <h5 className='text-lg'>We identify these opportunities and structure them into profitable projects for relevant entities, to the benefit of all stakeholders. These include:</h5>
            <ul className='list-disc my-5'>
              <li className='my-3'>Infrastructural opportunities and projects.</li>
              <li className='my-3'>Major bids/tenders for public and private sector supplies.</li>
              <li className='my-3'>Bulk supplies of petroleum and agricultural products.</li>
              <li className='my-3'>Power generation opportunities structured with Power Purchase Agreements from relevant government agencies.</li>
            </ul>
              </div>
              <FaChartLine className='text-9xl text-red-500'/>
              
            </div>
        </div>
    </div>
</div>
  )
}

export default Investment