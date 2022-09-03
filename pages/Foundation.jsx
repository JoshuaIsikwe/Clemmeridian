import Image from 'next/image'
import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'

const Foundation = () => {
  return (
    <div>
        <div className='header  relative w-full text-center mb-16'>
        <Image src='/../public/images/Foundation.jpg' width='1360' height='500' priority  alt='/Clemmeridian Care Foundation'></Image>
        <div className='division-title absolute uppercase font-bold text-justify bottom-1/3 left-4 text-2xl md:text-4xl lg:text-6xl'>Clemmeridian Care Foundation</div>
        <div className='division-line absolute w-5/6 bottom-1/4 left-4 h-2 bg-gradient-to-r from-red-500 to-blue-600'></div>
        </div>
        <div className='foundation-body'>
            <div>
               
                <div className='line-1'></div>
                
                <div className='section-1 flex flex-col items-center'>
                  <div className='left-section flex-1 w-4/6' >
                  
                <h5 className='text-lg'>
                    Clemmeridian Group has a social burden to give back to the society and this is done through Clemmeridian Care Foundation.
                </h5>
                <p>The focused service areas are:</p>
                <ul className='list-disc my-5'>
                  <li className='my-3'>To render humanitarian services in the society.</li>
                  <li className='my-3'>Provision of home for orphans and motherless babies.</li>
                  <li className='my-3'>Provision of welfare services for the widows, needy and underprivileged in the society.</li>
                  <li className='my-3'>Provision of welfare services for the widows, needy and underprivileged in the society.</li>
                  <li className='my-3'>Advancement of sustainable development goals relevant to the children and less privileged in the society. </li>
                  <li className='my-3'>Provision of any other care or support as may be approved by the trustees.</li>
                </ul>
                <h5 className='text-lg'>Their operation is managed by the CEO, Mrs Sabena Isikwe who is a seasoned administrator.</h5>
                  </div>
                  <FaHandHoldingHeart className='text-9xl text-red-500'/>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Foundation