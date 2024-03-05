import React from 'react'
import HEAccordion from './HEAccordion'

const HowDoesItWork = () => {
  return (
    <div className='w-4/5 p-5 my-5 flex flex-wrap m-auto'>
        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
            <img src="https://static-cse.canva.com/blob/1168077/Facilitategame-changinglearning2x.8b78e858.avif" alt="" srcset="" width="100%" />
        </div>
        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-10">
            <p className="section-title pb-5">
                The Ambiguous Edge
            </p>
            <HEAccordion/>
        </div>
    </div>
  )
}

export default HowDoesItWork