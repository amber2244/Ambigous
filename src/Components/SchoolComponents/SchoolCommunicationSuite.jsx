import React from 'react'
import SchoolAccordionSection from './SchoolAccordionSection'
import img from '../../Assets/img/school/img2.jpg'
const SchoolCommunicationSuite = () => {
  return (
    <div className='w-4/5 p-5 my-8 flex flex-wrap m-auto'>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img className='h-5/6 rounded-3xl' src={img} alt="" srcset="" width="80%" />
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-10">
        <p className="section-title pb-5 text-lg font-extrabold">
          How Does It Work
        </p>
        <SchoolAccordionSection />
      </div>
    </div>
  )
}

export default SchoolCommunicationSuite
